const { User, Message } = require("../../models");
const { UserInputError, AuthenticationError } = require("apollo-server-errors");
const { Op } = require("sequelize");

module.exports = {
  Query: {
    getMessages: async (_, { from }, { user }) => {
      try {
        if (!user) throw new AuthenticationError("UNAUTHENTICATED");
        const sender = await User.findOne({
          where: { username: from },
        });
        if (!sender) {
          throw new UserInputError("SENDER_NOT_FOUND");
        }
        const messages = await Message.findAll({
          where: {
            from: { [Op.in]: [user.username, sender.username] },
            to: { [Op.in]: [user.username, sender.username] },
          },
          order: [['createdAt', 'DESC']]
        });
        return messages;
      } catch (err) {
        console.log("GET_MESSAGES", err);
        throw err;
      }
    },
  },

  Mutation: {
    // ===> send message
    sendMessage: async (_, { to, content }, { user }) => {
      try {
        if (!user) throw new AuthenticationError("UNAUTHENTICATED");

        const recipent = await User.findOne({ where: { username: to } });
        if (!recipent) {
          throw new UserInputError("USER_NOT_FOUND");
        }
        if (recipent.username === user.username) {
          throw new UserInputError("CANNOT_SEND_MESSAGE_TO_YOURSELF");
        }

        if (content.trim() === "") {
          throw new UserInputError("MESSAGE_IS_EMPTY");
        }
        const message = await Message.create({
          from: user.username,
          to,
          content,
        });
        return message;
      } catch (err) {
        console.log("SEND_MESSAGE", err);
        throw err;
      }
    },
  },
};
