const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text:'First todo text'
},{
  _id: new ObjectID(),
  text:'Second todo text'
},{
  _id: new ObjectID(),
  text:'Third todo text'
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
});

describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{

    var text = 'Testing todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)

      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end((err,res)=>{
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((err)=>{
          done(err);
        });
      });
  });


it('should not create todo with invalid body data',(done)=>{

  request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(3);
        done();
      }).catch((e)=>{
        done(e);
      });
    });

});




});



describe('GET /todos',()=>{
  it('Should get all todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(3);
    })
    .end(done);
  });
});

describe('GET /todos/:id',()=>{
  it('Should return todo doc',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  });

  it('should return a 404 if todo not found',(done)=>{
    var someValidID = new ObjectID();
    request(app)
    .get(`/todos/${someValidID.toHexString()}`)
    .expect(404)
    .end(done);
  });


  it('should return a 404 if invalid id',(done)=>{
    var someValidID = new ObjectID();
    request(app)
    .get(`/todos/123`)
    .expect(404)
    .end(done);
  });


});
