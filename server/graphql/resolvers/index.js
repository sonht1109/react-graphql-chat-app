const userResolvers = require('./user');
const messageResolvers = require('./message');

module.exports = {
  Message: (parent) => createdAt = parent.createdAt.toISOString(),
  Query: {
    ...userResolvers.Query,
    ...messageResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...messageResolvers.Mutation
  }
}