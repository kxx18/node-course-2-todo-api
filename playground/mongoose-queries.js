const {ObjectID} = require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c67242a2463483831438e63'; //id ToDo
var id = '5c672ed8aa4d49442d83762c'; //user id

//if id is not valid

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

//the best choice to find one document by id

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e)=> console.log(e));

//challange query users collection gran an id from users collection
//load users mongoose model
//User.findbyID handle three cases
//works but no user 
//user was find print it
//handle the error there is no need to use isvalid

// const user1 = new User({
//     email: 'sdfsdf@hotmail.com',
    
//   });

//   user1.save(function (err) {
//     if (err) return handleError(err);
//     // thats it!
//   });

User.findById(id).then((user)=>{
    if(!user) return console.log('Unable to find user')
    console.log('User by id', JSON.stringify(user, undefined, 2));
}).catch((e)=>console.log(e));




