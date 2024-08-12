const mongoose=require("mongoose");
const post = require("./post");

mongoose.connect("mongodb://127.0.0.1:27017/authdb");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
});

module.exports=mongoose.model("user",userSchema);