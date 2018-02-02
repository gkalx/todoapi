const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  const ddb = client.db('TodoApp');

  console.log('Conected to MongoDB server');

ddb.collection('Todos').findOneAndDelete({text: 'eat'}).then((result)=>{
  console.log(result);
});
   // client.close();
});
