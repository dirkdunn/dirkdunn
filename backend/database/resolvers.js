const { Sequelize, sequelize } = require('./db_connector');
const User = sequelize.models.user;
const Post = sequelize.models.post;
const Comment = sequelize.models.comment;

const resolvers = {
  Query: {
    getUserById(object,args){
      return User.findById(args.id);
    },
    getAllUsers(object, args){
      return User.findAll({ where: args });
    },
    getUserByPostId(object, args){
      return new Promise((resolve,reject)=>{
        Post.findById(args.id).then(post => {
          if(post){
            resolve(post.getUser());
          } else {
            reject(post);
          }
        });
      });
    },
    getPostByCommentId(object, args){
      return new Promise((resolve,reject)=>{
        Comment.findById(args.id).then(comment => {
          if(comment){
            resolve(comment.getPost());
          } else {
            reject(comment);
          }
        });
      });
    }
  },
  User: {
    posts(user){
      return user.getPosts();
    }
  },
  Post: {
    user(post){
      return post.getUser();
    },
    comments(post){
      return post.getComments();
    }
  },
  Comment: {
    user(comment){
      return comment.getUser();
    },
    post(comment){
      return comment.getPost();
    }
  }
};

module.exports = resolvers;
