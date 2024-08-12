const mongoose=require("mongoose");
const user = require("./user");

mongoose.connect("mongodb://127.0.0.1:27017/authdb");

const postSchema=mongoose.Schema({
    content:String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    creation_date:{
        type: Date,
        default:Date.now
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
});

module.exports=mongoose.model("post",postSchema);