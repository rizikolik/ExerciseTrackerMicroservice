const    express =     require("express"),
        mongoose =     require ("mongoose"),
       bodyParser=     require ("body-parser");
                       require('dotenv').config();


const app=express();


const port=process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });

let UserSchema=new mongoose.Schema({
    name:String,

})





app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.post("/api/exercise/new-user",(req,res)=>{
    let name=req.body.username;
    res.send(name)
});
    






app.listen(port,(err)=>{
if(err){
    console.log(err);
}else{
    console.log("SERVER HAS STARTED...")  
}});