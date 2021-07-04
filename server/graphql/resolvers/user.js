const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { UserInputError, AuthenticationError } = require("apollo-server-errors");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { JWT_SECRET_KEY } = require("../../config/env.json");

const errorTypes = [
  "SequelizeUniqueConstraintError",
  "SequelizeValidationError",
];

module.exports = {
  Query: {
    me: async (_, __, { user }) => {
      try {
        if (!user) throw new AuthenticationError("UNAUTHENTICATED");
        const me = await User.findOne({
          where: {username: user.username}
        })
        const token = jwt.sign({ username: me.username }, JWT_SECRET_KEY);
        me.token = token;

        return {
          ...me.toJSON(),
          token,
          createdAt: me.createdAt.toISOString(),
        };
        
      } catch (err) {
        console.log("ME", err);
        throw err;
      }
    },
    // ===> getUsers
    getUsers: async (_, __, ctx) => {
      // authenticate
      const { user } = ctx;
      try {
        if (!user) throw new AuthenticationError("UNAUTHENTICATED");
        // get users except user who does query
        const users = await User.findAll({
          where: { username: { [Op.ne]: user.username } },
        });
        return users;
      } catch (err) {
        console.log("GET_USERS", err);
        throw err;
      }
    },

    // ===> login
    login: async (_, args) => {
      const { email, password } = args;
      let errors = {};
      try {
        // find user
        const user = await User.findOne({
          where: { email },
        });

        if (!user) {
          errors.user = "Cannot find user !";
        } else {
          const comparePassword = await bcrypt.compare(password, user.password);
          if (!comparePassword) {
            errors.password = "Password is incorrect !";
          }
        }

        // throw error
        if (Object.keys(errors).length) {
          throw new UserInputError("BAD_INPUT", { errors });
        }

        // return token
        const token = jwt.sign({ username: user.username }, JWT_SECRET_KEY);
        user.token = token;

        return {
          ...user.toJSON(),
          token,
          createdAt: user.createdAt.toISOString(),
        };
      } catch (err) {
        console.log("LOGIN", err);
        throw err;
      }
    },
  },

  Mutation: {
    // ===> register
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
        throw new UserInputError("BAD_INPUT", { errors });
      }
    },

    // ===> update profile
  },
};
