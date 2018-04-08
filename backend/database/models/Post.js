const { Sequelize, sequelize } = require('../db_connector');
const User = require('./User');
const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT('long'),
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  post_category: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{
  underscored: true
});

Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;
