const {ObjectID} = require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User} = require('./../server/models/user');

//everything is going to get removed
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findOneAndRemove({_id:"dsfsd"}).then((todo)=>{
//     console.log(todo);
// })
// Tdo.findByIdAndRemove

Todo.findByIdAndRemove('5c676426a7128d1de85ae94d').then((todo)=> {
    console.log(todo);
});
