module.exports = (Sequelize, sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar_url: {
      type: Sequelize.STRING,
      defaultValue: 'example.com'
    },
    website: {
      type: Sequelize.STRING,
      defaultValue: 'None'
    }
  },{
    underscored: true
  });

  return User;

};
