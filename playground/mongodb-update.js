const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    // use return to exit the app and no longer to write else statement.
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a1186de65af596cfb3b2df2')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f5df559a93e31f1badd762')
  },{

    $set:{name:'Hajer Albadri'},
    $inc: {age:-1}

  },{

    returnOriginal: false

  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
