const { ApolloServer } = require('apollo-server-express');

const userTypeDefs = require('../graphController/userDetials/user.typeDef');
const userResolvers = require('../graphController/userDetials/user.resolver');
const user = new ApolloServer({ typeDefs: userTypeDefs, resolvers: userResolvers })

const loginTypeDefs = require('../graphController/login/login.typeDef');
const loginResolvers = require('../graphController/login/login.resolver');
const login = new ApolloServer({ typeDefs: loginTypeDefs, resolvers: loginResolvers })

async function startServers(app) {
    await user.start();
    await login.start();

    // Apply Apollo Server middleware to Express routes
    user.applyMiddleware({ app, path: '/userTable' });
    login.applyMiddleware({ app, path: '/login' });

  }

module.exports={
    server:startServers
}  