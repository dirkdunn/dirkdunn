const { Sequelize, sequelize } = require('./db_connector'),
  casual = require('casual'),
  UserModel = require('./models/User'),
  PostModel = require('./models/Post'),
  CommentModel = require('./models/Comment');

function createUsers(times){
  times = times || 100;
  return new Promise((resolve,reject) => {
    (function recursiveCreate(times){
      UserModel.create({
        username: casual.username,
        first_name: casual.first_name,
        last_name: casual.last_name,
        email: casual.email,
        password: casual.password,
        avatar_url: 'http://example.com',
        website: casual.url
      }).then(r => {
        if(times > 0){
          recursiveCreate(--times);
        } else {
          resolve(true);
        }
      });
    })(times)
  });
}

function createPosts(times){
  times = times || 1000;
  return new Promise((resolve,reject) => {
    (function recursiveCreate(times){
      PostModel.create({
        title: casual.title,
        body: casual.text,
        user_id: Math.floor(Math.random() * 100)+1,
        likes: Math.floor(Math.random() * 100),
        post_category: casual.color_name
      }).then(r => {
        if(times > 0){
          recursiveCreate(--times);
        } else {
          resolve(true);
        }
      });
    })(times)
  });
}

function createComments(times){
  times = times || 100;
  return new Promise((resolve,reject) => {
    (function recursiveCreate(times){
      CommentModel.create({
        body: casual.sentences( n=(Math.floor(Math.random()*10)) ),
        first_name: casual.first_name,
        user_id: Math.floor(Math.random() * 100)+1,
        post_id: Math.floor(Math.random() * 1000)+1,
        likes: Math.floor(Math.random() * 50)
      }).then(r => {
        if(times > 0){
          recursiveCreate(--times);
        } else {
          resolve(true);
        }
      });
    })(times);
  });
}

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: true }).then(() => {
      createUsers().then(r => {
        createPosts().then(r => {
          createComments().then(r => {
            console.log("SUCCESS");
            process.exit();
          });
        });
      });
    });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
