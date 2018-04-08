const { Sequelize, sequelize } = require('./db_connector');
const User = sequelize.models.User;
const Post = sequelize.models.Post;

User.findAll({
  where: { id: 12 },
  include: [ Post ]
}).then(users => {
  console.log('TEST:', JSON.stringify(users[0]))

  /*
    [{
      "name": "A Task",
      "id": 1,
      "createdAt": "2013-03-20T20:31:40.000Z",
      "updatedAt": "2013-03-20T20:31:40.000Z",
      "userId": 1,
      "user": {
        "name": "John Doe",
        "id": 1,
        "createdAt": "2013-03-20T20:31:45.000Z",
        "updatedAt": "2013-03-20T20:31:45.000Z"
      }
    }]
  */
})
