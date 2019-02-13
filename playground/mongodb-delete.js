const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
  })
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eeat lunch'}).then((result)=>{
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // })

  //look for duplicates delete many all document that have name andrew
  // db.collection('Users').deleteMany({name: 'Andrew'});

  //delete by id
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c64096f4761275df09ba852')}).then((deleted)=>{
    console.log(JSON.stringify(deleted, undefined, 2));
  })

  //db.close();
});