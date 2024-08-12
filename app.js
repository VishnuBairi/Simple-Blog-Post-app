const cookieParser = require("cookie-parser");
const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const userModel = require("./models/user");
const postModel= require("./models/post");
const bcrypt=require("bcrypt");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.render("home");
})
app.post("/registeruser",async(req,res)=>{
    let {name,email,password,age} = req.body;
    let user=await userModel.findOne({email});
    if(user)res.status(500).send("User already exists");
    else{
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,pwd)=>{
            const createdUser=await userModel.create({
                name,
                email,
                password:pwd,
                age
            });
            let token=jwt.sign({email:email,userid:createdUser._id},"secretvalue");
            res.cookie("token",token);
            res.send("Registerd");
        })
    })
}   
})
app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/login");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",async(req,res)=>{
    const userData=await userModel.findOne({email:req.body.email})
    if(!userData) res.send("Something went Wrong");
    else{
    bcrypt.compare(req.body.password,userData.password,(err,result)=>{
        if(result){
            let token=jwt.sign({email:userData.email,userid:userData._id},"secretvalue");
            res.cookie("token",token);
            res.redirect("/profile");
        }
        else res.send("Something Went Wrong");
    });
}
});
app.get("/profile",isLoggedIn,async(req,res)=>{
    let user= await userModel.findOne({email:req.user.email}).populate("posts");
    res.render("profile",{user});
})
app.post("/createPost",isLoggedIn,async(req,res)=>{
    let user= await userModel.findOne({email:req.user.email});
    let createdpost =await postModel.create({
        user:user._id,
        content:req.body.content,
    });
    user.posts.push(createdpost._id);
    await user.save();

    res.redirect("/profile");
})
app.get("/like/:id",isLoggedIn,async(req,res)=>{
    let post=await postModel.findOne({_id:req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid) === -1){
    post.likes.push(req.user.userid);
    }
    else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1);
    }
    await post.save();
    res.redirect("/profile");
})
app.get("/editPost/:id",isLoggedIn,async(req,res)=>{
    let post= await postModel.findOne({_id:req.params.id}).populate("user");
    res.render("editpost",{post});
})
app.post("/updatePost/:id",isLoggedIn,async(req,res)=>{
    let post= await postModel.findOneAndUpdate({_id:req.params.id},{content:req.body.content})
    res.redirect("/profile");
})

 function isLoggedIn(req,res,next){
    if(req.cookies.token=="")res.redirect("/login");
    else{
        let data=jwt.verify(req.cookies.token,"secretvalue");
        req.user=data;
        next();
    }
 }

app.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log("node running");
})