const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(process.env.MONGOURL)
     
        await mongoose.connect(process.env.MONGOURL);
        console.log('MongoDB connected');

};
connectDB();
module.exports = connectDB;
