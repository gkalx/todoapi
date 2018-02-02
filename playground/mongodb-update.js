const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');//To stop the app wee add return
  }
  const ddb = client.db('TodoApp');
  console.log('Conected to MongoDB server');

ddb.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a72eadd7b62be2cd0c03a03')
},{
  $set: {
    name: 'Boubakos'
  },
  $inc:{
    age: -25
  }
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});
   // client.close();
});
