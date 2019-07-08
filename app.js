const    express =        require("express"),
        mongoose =        require ("mongoose"),
       bodyParser=        require ("body-parser"),
        Exercise =        require("./models/exercise"),
             User=        require("./models/user");

                       require('dotenv').config();
        

const app=express();


const port=process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });







app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});


app.post("/api/exercise/new-user",(req,res)=>{
    let name=req.body.username;
   


    User.findOne({"name":name},"-exercise",(err,foundedUser)=>{
        if(err){
           res.send(err)
        }else {
           if(foundedUser){
             userid=foundedUser._id
             console.log(userid)
            
               res.redirect("/")
           }else{
            let newUser={"name":name};
            User.create(newUser,(err,createdUser)=>{
                if(err){
                    res.json(err)
                }else{
                    userid=createdUser._id
                    id.value=createdUser._id
               res.redirect("/")
                }
            })
               
           }
    
        }
       
    })
  
  

  
});
    






app.listen(port,(err)=>{
if(err){
    console.log(err);
}else{
    console.log("SERVER HAS STARTED...")  
}});