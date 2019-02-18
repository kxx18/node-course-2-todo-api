require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    })
});

//GET /todos/123232idgetspassed
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findById(id)
        .then((todo) => {
            if (!todo) res.status(404).send();
            res.send({ todo })
        }).catch((e) => res.status(400).send());

    //validate objectID
    //if not valid stop function execution and respond with 404 send back empy send

    //findbyId
    //success 
    //if todo -send it back
    //no todo call succeed send back a 404 withe empy body
    //error case
    //400 - is not valid and send empty body back



})

app.delete('/todos/:id', (req, res) => {
    //get the id
    //validate id not valid return 404
    //remove todo by id
    //success
    //if no doc, send 404
    //if doc send doc back
    //erroor - erro -> 400 with empty body
    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findByIdAndRemove(id)
        .then((todo) => {
            if (!todo) res.status(404).send();
            res.send({ todo });
        }).catch((e) => res.status(400).send());

});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) return res.status(404).send();

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    }).catch(e => res.status(400).send());
});

//POST /users
app.post('/users', (req, res)=>{
    var body =_.pick(req.body, ['email', 'password']); 
    var user = new User(body);

    user.save()
        .then((user)=>{
            if(!user) res.status(404).send();
            res.send(user);
        }, e=> res.status(400).send(e));
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };
