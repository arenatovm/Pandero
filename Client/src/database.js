const mongoose = require ('mongoose');

const URI = process.env.MongoDB_URI ? process.env.MongoDB_URI : 'mongodb://localhost/databasetest';

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true
});

const connnection = mongoose.connection;

connnection.onece('open', ()=>{
    console.log('DB is connected');
    
});