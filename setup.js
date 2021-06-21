const mongoose = require('mongoose');

// connection string
const MONGO_URI = "mongodb+srv://Musab19:uXHp86TQr8ABj7QR@cluster0.pqz7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Setup database
module.exports = () => {
    mongoose.connect(MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false 
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('database connected');
        }
    });
};
