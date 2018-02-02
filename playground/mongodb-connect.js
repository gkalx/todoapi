const {MongoClient, ObjectID} = require('mongodb');

var user = {name:'Alex',age:22};
var {name} = user;
console.log(name);
//es6 end

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

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
