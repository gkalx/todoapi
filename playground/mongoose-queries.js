const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

var id = '5a7462eb4261f7263c0d1d5c';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
    console.log('Todo By Id');
    console.log(JSON.stringify(todo, undefined, 2));
  }).catch((er)=>{
     console.log(er);
    //console.log(er.message);
});

var userId = '5a73426636614d2b58117c0b';

User.findById(userId).then((user)=>{
  if(!user){
    return console.log('Unable to find user.');
  }
  console.log('User By Id');
  console.log(JSON.stringify(user, undefined, 2));
}).catch((error)=>{
  //console.log(error);
   console.log(error.message);
});
