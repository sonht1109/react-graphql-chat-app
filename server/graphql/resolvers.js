const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server-errors");

const errorTypes = [
  "SequelizeUniqueConstraintError",
  "SequelizeValidationError",
];

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        console.log("get users", err);
      }
    },
  },
  Mutation: {
    register: async (_, args) => {
      let { username, email, password, confirmPassword } = args;
      const errors = {};
      try {
        // check passwords match
        if (password !== confirmPassword) {
          errors.password = "Password not match";
        }

        // throw errors
        if (Object.keys(errors).length > 0) {
          throw errors;
        }

        // hash password
        password = await bcrypt.hash(password, 16);

        // create user
        const user = await User.create({
          username,
          email,
          password,
        });
        return user;
      } catch (err) {
        console.log("REGISTER_ERROR", err);
        if (errorTypes.includes(err.name)) {
          err.errors.forEach((e) => (errors[e.path] = e.message));
        }
        throw new UserInputError("BAD_INPUT", errors);
      }
    },
  },
};
