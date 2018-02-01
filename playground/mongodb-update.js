// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');//To stop the app wee add return
  }
  // Use the admin database for the operation
  const ddb = client.db('TodoApp');
  //const Todos = TodoAppDb.collection('Todos');
  console.log('Conected to MongoDB server');




//5a72ec1923194d2cecdd5a25
//findOneAndUpdate--Will remove one but also return it with those values
//by default it brings the old values back if you want the new ones you have
//to write


//http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
// findOneAndUpdate(filter, update, options, callback)Returns:Promise if no callback passed
//takes a lot of arguments
//filter lets us target the document we want to update-most lickely with the id.
//next are the actual update we want to make.
//next some option which we will use only one the
//the call back we are not goint to use we will use callbacks
//delete by _id we have to create a new ObjectID
// ddb.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a72ec1923194d2cecdd5a25')
// },{//https://docs.mongodb.com/manual/reference/operator/update/
//   //https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set
//   //https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false//We want it to return the new values not the old ones
// }).then((result)=>{
//   console.log(result);
// });




ddb.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a72eadd7b62be2cd0c03a03')
},{//https://docs.mongodb.com/manual/reference/operator/update/
  //https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set
  //https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
  $set: {
    name: 'Boubakos'
  },
  $inc:{
    age: -25
  }
},{
  returnOriginal: false//We want it to return the new values not the old ones
}).then((result)=>{
  console.log(result);
});



   // client.close();
});
