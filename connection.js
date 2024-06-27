//import mongoose
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://himasony:himasony@cluster0.9wulj1n.mongodb.net/openbatchdb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log("error")
})
