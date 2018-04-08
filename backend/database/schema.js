const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const typeDefs = `
type Query {
  testString: String
}

type User {
  id: ID
  first_name: String
  last_name: String
  email: String
  password: String
  avatar_url: String
  website: String
}

type Post {
  id: ID
  title: String
  body: String
  user_id: Int
  likes: Int
  post_category: String
}

type Comment {
  id: ID
  body: String
  user_id: Int
  post_id: Int
  likes: Int
}
`;

const schema = makeExecutableSchema({ typeDefs });

module.exports =  schema;
