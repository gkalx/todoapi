
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }

  const TodoAppDb = client.db('TodoApp');
  const Todos = TodoAppDb.collection('Todos');
  console.log('Conected to MongoDB server');

  Todos.find({_id: new ObjectID('5a71faf3d10d1f184c983801')}).toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });


  Todos.find().count().then( (count) => {
    console.log('Todos count: ',count);
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });

  TodoAppDb.collection('Users').find({name: 'Alex'}).toArray().then((docs)=>{
    console.log('User with name:Alex',docs);
  },(userError)=>{
    console.log('Unable to fetch todos',userError);
  });


   client.close();
});
