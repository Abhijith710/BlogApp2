const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://Abhi:Abhi@cluster0.bm5b8gi.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})