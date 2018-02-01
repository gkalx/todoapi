var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
      type: Number,//itg going to be a linux timestamp
      default: null
  }
});
module.exports = {Todo}; 
