// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//The 2 above codes are the same.

//with ObjectID we can create a object id variable like bellow
// var objId = new ObjectID();
// console.log(objId);
// console.log(objId.getTimestamp());
//After the port we use /TodoApp to specify the name of the db we want to connect to.
//next a callback function 2 args an err and a db object which will use to read
//write to dabase and more...
//even thought we created a database it will not create untill we put some data
//to it.

//es6 destructuring making variable from object --
var user = {name:'Alex',age:22};
var {name} = user;
console.log(name);
//es6 end

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');//To stop the app wee add return
  }
  // Use the admin database for the operation
  const TodoAppDb = client.db('TodoApp');
  const Todos = TodoAppDb.collection('Todos');
  console.log('Conected to MongoDB server');
  //--Add some input to our collection
  // Todos.insertOne({
  //   text: 'something to do like eat',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });
  //client.close(); will close method clsoses the connection with mongodb


  // TodoAppDb.collection('Users').insertOne({
  //   name: 'Alex',
  //   age:30,
  //   location:'17455 Greece'
  // }, (err, result)=>{
  //   if(err){
  //     console.log('Unable to insert User',err);
  //   }
    // console.log(JSON.stringify(result.ops, undefined, 2));
    //console.log(result.ops[0]._id.getTimestamp());
  //});
  // client.close();
});
