const mongoose = require("mongoose");

const connectdb = async ()=>{
    // console.log(process.env.codecard_uri);
    await mongoose.connect(process.env.codecard_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log("db connected");
}
module.exports = connectdb;