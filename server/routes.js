// in case of emergancy!!!
// DROP TABLE parents;
// DROP TABLE users;
const express = require('express');
const router = express.Router();
// const dataAccess = require('../dataAccess/da');

//DB -sequelize 
const User = require("../dataAccess/User"); 
const Parent = require("../dataAccess/Parent"); 

// create Tables
// User.sync()
// Parent.sync()

// create starter Data
const addRelationship = async function () {
  //let user1 = await User.create({ imgUrl: "http://www.webweaver.nu/clipart/img/people/baby/mother-to-be.jpg", userName: "Limor Pessi" });
  //let user2 = await User.create({ imgUrl: "https://vectortoons.com/wp-content/uploads/2015/12/family-collection-dads-009.jpg", userName: "Eli Pessi" });   
  //let user3 = await User.create({ imgUrl: "https://loinhacviet.info/images250_/kids-clipart-boy.png", userName: "Itay Pessi",parentId:1,parentId:2 });
  //let user4 = await User.create({ imgUrl: "https://loinhacviet.info/images250_/kids-clipart-heart-7.jpg", userName: "Yuval Pessi" });
  
  let user1 = await User.find({where:{id:1}});
  let user2 = await User.find({where:{id:2}});
  //let user3 = await User.find({where:{id:3}});
  let user4 = await User.find({where:{id:4}});
  //let parent = await Parent.create({userId:user3.id, parentId:user1.id});
  //let parent2 = await Parent.create({userId:user3.id, parentId:user2.id});
  let parent3 = await Parent.create({userId:user4.id, parentId:user1.id});
  let parent4 = await Parent.create({userId:user4.id, parentId:user2.id});
  
}

//addRelationship()

// return all the users
router.get('/users', ( req, res ) => {
  User.findAll({ include:[{model:User , as:"Children"}]})
  .then((users)=>{
    res.send(JSON.stringify(users))
  })
  .catch((err)=>{
    res.send('Error: Cannot return users'); 
  })
}); 

// return all the parents
router.get('/parents', ( req, res ) => {
  Parent.findAll()
  .then((parents)=>{
    res.send(JSON.stringify(parents))
  })
  .catch((err)=>{
    res.send('Error: Cannot return users'); 
  })
}); 

// return all user and his childs
// router.get('/parent/:userID', ( req, res ) => {
//   let {userID} = req.params;
//   User.find({where:{id:userID} , include:[{model:User , as:"Children"}]})
//   .then((user)=>{
//     res.send(JSON.stringify(user))
//   })
//   .catch((err)=>{
//     res.send('Error: Cannot return users'+err); 
//   })
// });


// return parent by name and all his children
router.get('/parent', ( req, res ) => {
  let {Name} = req.query;
  console.log(Name);
  User.find({where:{userName:Name} , include:[{model:User , as:"Children"}]})
  .then((user)=>{
    res.send(JSON.stringify(user))
  })
  .catch((err)=>{
    res.send('Error: Cannot return users'+err); 
  })
});


//add new user
router.post('/user', async (req, res ) => {
  let user = req.body;
  try {
    let user1 = await User.create(
      { 
        imgUrl: user.imgUrl, 
        userName: user.userName  
      }
      );
      res.send('user saved successfully');
    }
    catch (e) {
      console.log('err: '+ e)
      res.send('Error cannot save the user to DB')
    }
  });  

//add child to parent
router.post('/parent', async (req, res ) => {
  let data = req.body;
  try {
    let user1 = await User.create(
      { 
        imgUrl: data.imgUrl, 
        userName: data.userName  
      }
      );
      // user1= await User.find({where:$and:[{id:2},{id:2}]});

      res.send('user saved successfully');
    }
    catch (e) {
      console.log('err: '+ e)
      res.send('Error cannot save the user to DB')
    }
  });  
  

  module.exports = router;