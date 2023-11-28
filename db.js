const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("username", "postgres", "123456", 
    {
        host: "localhost", 
        dialect: "postgres", 
        port: 5432
    });

const userProfile = sequelize.define("user_profile", {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id'
    },
    userName: {
        type: Sequelize.STRING,
        field: 'user_name'
    },
    passWord: {
        type: Sequelize.STRING,
        field: 'pass_word'
    }
}, {freezeTableName: true});

sequelize.sync({ force: true });

module.exports = { userProfile };

