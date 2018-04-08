module.exports = (Sequelize, sequelize) => {
  const User = sequelize.models.user;
  const Post = sequelize.models.post;

  const Comment = sequelize.define('comment', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    body: {
      type: Sequelize.TEXT('long'),
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },{
    underscored: true
  });

  Comment.belongsTo(User);
  Comment.belongsTo(Post);
  User.hasMany(Comment);
  Post.hasMany(Comment);

  return Comment;
};
