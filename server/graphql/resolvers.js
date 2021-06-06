const { User, Message } = require("../models");
const bcrypt = require("bcryptjs");
const { UserInputError, AuthenticationError } = require("apollo-server-errors");
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize')
const {JWT_SECRET_KEY} = require('../config/env.json')

const errorTypes = [
  "SequelizeUniqueConstraintError",
  "SequelizeValidationError",
];

module.exports = {
  Query: {

    // ===> getUsers
    getUsers: async (_, __, ctx) => {
      // authenticate
      const {user} = ctx;
      try {
        if(!user) throw new AuthenticationError("UNAUTHENTICATED")
        // get users except user who does query
        const users = await User.findAll({
          where: {username: {[Op.ne]: user.username} }
        });
        return users;
      } catch (err) {
        console.log("GET_USERS", err);
        throw err
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
          const comparePassword = await bcrypt.compare(password, user.password);;
          if (!comparePassword) {
            errors.password = "Password is incorrect !";
          }
        }
        
        // throw error
        if (Object.keys(errors).length) {
          throw new UserInputError("BAD_INPUT", {errors});
        }

        // return token
        const token = jwt.sign({ username: user.username }, JWT_SECRET_KEY)
        user.token = token

        return {
          ...user.toJSON(),
          token,
          createdAt: user.createdAt.toISOString()
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
        throw new UserInputError("BAD_INPUT", {errors});
      }
    },

    // ===> send message
    sendMessage: async(_, {to, content}, {user}) => {
      try{

        if(!user) throw new AuthenticationError('UNAUTHENTICATED');

        const recipent = await User.findOne({ where: {username: to} });
        if(!recipent){
          throw new UserInputError('USER_NOT_FOUND');
        }

        if(content.trim() === ''){
          throw new UserInputError('MESSAGE_IS_EMPTY');
        }
        const message = await Message.create({
          from: user.username,
          to,
          content
        })
      }
      catch(err){
        console.log(err);
        throw err;
      }
    }
  },
};
