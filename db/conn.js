const mongoose = require('mongoose');

const DB = 'mongodb+srv://shashankgs420:Zu3Zw8pC94dkaQ0X@cluster0.bsqli4z.mongodb.net/mernstack/'; 

const connection = ()=>{
    mongoose.connect(DB, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify:false
    }).then(() => {
        console.log('connection successful');
    }).catch((err) =>{
        console.log('Unable to Connect to Database...')
        console.error(err.message)
        process.exit(1);
    })
}

module.exports = connection

