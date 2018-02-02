var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

//The get Todos route - a get request which will be responsible for returngin
//all of your todos. So we will use app.get to register the route handler and
//the url is going to be the some url as above.'/todos'
//Next we will make our callback passing in the req,res objects and inside
//we are only going to get all of the todos in the collection
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    //res.send(todos);
    //Passing in the array above like this is not the best thing to do.
    //When you pass back an array you're kind of locking your self down
    //if you want to add another propertie like a custom status code or some
    //other data you cant because you have an array.
    //So the better solution would be to create an object and on that object
    //specify todos setting it equal to todos but {todos:todos} so you can
    //later on pass new properties. As we now {todos} is {todos:todos} so we
    //will use that. And if we want to add another propertie later on we could
    //do somethin like {todos ,code: '8877'}
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});
//Postman-With post man we can create a collection of routes so we can refire
//request without having to manualy enter all the information.
//We can either save as and in the Request Name put something like
//GET /todos meaning the http method followed with the url
//we can leave the description blank for now. But we will create a new collection
//since we dont have any yet. and call it Todo App
//save it. And then acces it from the collections tab.
//in a new tab choose post enter lochalhost:3000/todos in body choose raw and
//JSON(application/json) type and inside the body provide your object like
//When commithing to gihub we can use the -a flag which means it add all modified
//files to the next commit. It does not work for new untracked files but
//modified files are prefectly fine. But because we have only one modified file
//we do not need to make git add . the modified file is going to get commited.
//You can use that when you dont have any new files but only modified files
//so you can skip the git add command.
app.listen(3000,()=>{
  console.log('Server Started at port 3000');
});
module.exports = {app};
