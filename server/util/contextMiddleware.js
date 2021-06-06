const { AuthenticationError } = require('apollo-server-errors')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config/env.json')
const {User} = require('../models/index');

module.exports = (ctx) => {
  if(ctx.req && ctx.req.headers.authorization){
    const token = ctx.req.headers.authorization.split('Bearer ')[1]
    jwt.verify(token, JWT_SECRET_KEY, (err, decodeToken) => {
      if(err){
        throw new AuthenticationError("UNAUTHENTICATED")
      }
      ctx.user = decodeToken
    })
  }
  return ctx;
}