var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');
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

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{

  var id = req.params.id;
  if(!ObjectID.isValid(id)){
   return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    //res.status(400).send(e);
    res.status(404).send();
  });
});

app.listen(3000,()=>{
  console.log('Server Started at port 3000');
});
module.exports = {app};
