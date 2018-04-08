const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers');
const typeDefs = `
type Query {
  getUserById(id: ID): User
  getUserByPostId(id: ID): User
  getPostByCommentId(id: ID): Post
  getAllUsers(
    id: ID,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    avatar_url: String,
    website: String): [User]
}

type User {
  id: Int
  first_name: String
  last_name: String
  email: String
  password: String
  avatar_url: String
  website: String
  posts: [Post]
}

type Post {
  id: ID
  title: String
  body: String
  user_id: Int
  likes: Int
  post_category: String
  comments: [Comment]
  user: User
}

type Comment {
  id: ID
  body: String
  user_id: Int
  post_id: Int
  likes: Int
  post: Post
  user: User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports =  schema;
