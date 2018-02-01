//Refactor because it dosent belong here we have db configuration stuff which
//should live somewhere else and we have our models which should also live
//in seperate files. The only thing that we want in server.js is our express
//route handler.
//To get started inside of the server make a new folder called db an inside of
//the db folder we'll make a file where all of this mongoose configuration
//happens.
//and inside that folder make a mongoose.js and all we need to do is take our
//mongoose configuration and move it there.
//Now we do need to exprot something and that is the mongoose variable.
//so when someone requires this file they are going to have mongoose
//configured and they are going to get it back.
//They are going to get back the mongoose variable that comes from the library
//module.exports ={mongoose:mongoose}; or module.exports ={mongoose}; its the same.
//now here we require that file
var {mongoose} = require('./db/mongoose');
//Now we want to do the same thing for the Todo and the User in server/models/
//And in singular we are going to create the user.js and todo.js files.
//And put inside our models and export the bellow.
//now inside of the files we still need to call mongoose and export the model
//var mongoose = require('mongoose');
//module.exports = {User};
//module.exports = {Todo};
//so here we import them.
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
//The server.js is just going to be for our routes
//we will need express. so install npm i express --save
//and  npm i body-parser --save
//body-parser is going to let us send json to the data to the server the server
//then takes that json and can do something with it.
//body-parser essentially parsers the body. It takes that string body and turns
//it into a javascript object.

//and we can make 2 npm installs with one command like that
//npm i express body-parser --save
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
//All we have to do is start configuring our routes.
//And we will be focusing on the post route.
//This is going to let us create new todos.
//Basic CRUD operations CReateUpdateDelete.
//When you want to create a resource you use the post http method and you
//send that resource as the body. This means that when we want a new todo we are
// going to send a json object over to the server. The object is going to have
//a text propertie and the server is going to get that post propertie and create
//the new model and send the complete model with the id the completed propertie
// and completedAt back to the client.
// To setup a route we need to call app.passing in the 2 arguments we've used for
//every single express route. Our url and our callback function that gets called
//with the req and res objects. app.post('/todos',(req,res)=>{});

//In order to get the body data that gets sent from the client we have to use
//the body-parser module.
//As we now body-parser is going to take your json and convert it into an object
//attacthing it onto the req object.
//it need a middleware and we are going to put it here
//as we now app.use takes the middleware and we usaly access something of the
//library. in our case is bodyParesr.json() getting called as a function. The
//return value from this json method is a function and that is the middleware
//that we need to give to express.

app.use(bodyParser.json());
//With this in place we can now send json to our express application.
//so inside post('/todos',(req,res)=>{ we will console.log(req.body);
//where the body gets stored by bodyParser .
//We can now start our server and test things out inside of postman.
//The only thing left to do inside the handler is actualy create that todo
//using the information that comes from the user.
//Lets make a variable called todo create an instance of a mongoose model.
//var todo = new Todo({}); passing in the values we want to set.
//in this case it is only text: and we will set it equal to req.body.text
//next we will call the todo.save() and this is going to actualy save the model
//to the db and we are going to be providing a callback for a success case and
//for the error case.
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);//we will change that later. We can also set an http status.
    //if you remember http statuses that you give someone some information about
    //how their request went. did it go well did it go poorly
    //http://httpstatuses.com to see all the statuses tha you can set the one
    //that is set by express by default is 200.
    //what we are going to be using for an error is a 400 Bad request
    //we do that before the .send() and all we have to do is res.status(400).send(err)
  });
 console.log(req.body);
});
app.listen(3000,()=>{
  console.log('Server Started at port 3000');
});
