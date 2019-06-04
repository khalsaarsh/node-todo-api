const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connnect to mongodb server');
    }
    console.log('connected to mongodb server');
//    
//    db.collection('Users').insertOne({
//        name: 'Arsh',
//        age: 25
//    },(err,res) => {
//        if(err){
//            console.log('Unable to insert todo');
//            console.log(err);
//        }
//        else{
//            console.log(res.ops[0]._id.getTimestamp());
//        }
//        
//    });
    
//      db.collection('Todos').find({_id: new ObjectId('5c2667c64bde9b24ac679a9a')}).count().then((count)=>{
//          console.log(`Todos count: ${count}`);
//      },(err)=>{
//          console.log('Unable to fetch todos.',err);
//      });
//    
    db.collection('Users').find({name: 'Arsh'}).count().then((count) =>{
        console.log('Count is : ',count);
    },(err)=>{
        console.log('Error',err);
    })
    
    db.close();
});

var obj = new ObjectId();
console.log(obj);
console.log(obj);