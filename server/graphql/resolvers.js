module.exports = {
  Query: {
    getUsers: () => {
      return [
        {username: 'user1', email: 'user1@gmail.com'},
        {username: 'user2', email: 'user2@gmail.com'},
      ]
    }
  }
}