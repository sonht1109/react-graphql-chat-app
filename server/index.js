const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { sequelize } = require("./models");

const contextMiddleware = require('./util/contextMiddleware')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextMiddleware,
});

server.listen().then(({ url }) => {
  sequelize
    .authenticate()
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("Sequelize authenticate", err));
  console.log(`🚀  Server ready at ${url}`);
});
