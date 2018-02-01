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

//deleteMany--Will let us target many docs and remove them
// ddb.collection('Todos').deleteMany({text: 'eat'}).then((result) => {
//   console.log(result);//at the top of the console we get ok:1 and n:3=the number of records that where deleted
// });
//deleteOne--Will let us target one doc and remove it
// ddb.collection('Todos').deleteOne({text: 'eat'}).then((result)=>{
//   console.log(result);//at the top of the console we get ok:1 and n:3
// });
//findOneAndDelete--Will remove one but also return it with those values
ddb.collection('Todos').findOneAndDelete({text: 'eat'}).then((result)=>{
  console.log(result);
});





   // client.close();
});
