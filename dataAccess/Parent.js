const dataAccess = require('./da');
const Sequelize = require('sequelize'); 
const User = require('./User'); 



const Parent  = dataAccess.sequelize.define('parent', {});

User.belongsToMany(User, {through:Parent, as:'Parents', foreignKey:'userId'})
User.belongsToMany(User, {through:Parent, as:'Children', foreignKey:'parentId'})

module.exports = Parent;

