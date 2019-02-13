const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({
//       _id: new ObjectID('5c63ebe04761275df09ba84b')
//     }).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err)=>{
//     console.log("unable to fetch data", err)
//   }) 

//   db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count: ${count}`);
  
// }, (err)=>{
//   console.log("unable to fetch data", err)
// }) 
    
    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs)=>{
        console.log('Results');
        console.log(JSON.stringify(docs, undefined, 2))
    }, err=> console.log('cant find that name', err));

    db.collection('Users').find({name: 'Andrew'}).count().then((count)=>{
        console.log('This is the count with username provided by you: ', count)
    }, err=> console.log('cant find that name', err))


  //db.close();
});