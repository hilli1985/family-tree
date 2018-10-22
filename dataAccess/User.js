const dataAccess = require('./da');
const Sequelize = require('sequelize'); 

const User  = dataAccess.sequelize.define('user', {
    userName: {
        type:Sequelize.STRING,
        notNull:true
    },
    imgUrl : {
        type:Sequelize.STRING
    }
});

module.exports = User;


