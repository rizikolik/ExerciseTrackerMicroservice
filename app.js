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
             res.json({name:name,id:foundedUser._id ,status:"saved user"})
           }else{
            let newUser={"name":name};
            User.create(newUser,(err,createdUser)=>{
                if(err){
                    res.json(err)
                }else{
                   res.json({name:name,id:createdUser._id,status:"new Created User"})
                }
            })
               
           }
        }
       
    })
  });
  app.post("/api/exercise/add",(req,res)=>{
      let desc=req.body.desc;
      let duration=req.body.time;
      let date=req.body.date;
      let name=req.body.exercisename;
      
    Exercise.findOne({name:name,desc:desc, duration:duration ,date:date},(err,foundedExercise)=>{
        if(err){
           res.send(err)
        }else {
           if(foundedExercise){
             res.json({name:name,desc:desc,duration:duration,date:Date,status:"saved user"})
           }else{
            let newExercise={name:name,desc:desc,duration:duration,date:date};
            Exercise.create(newExercise,(err,createdExercise)=>{
                if(err){
                    res.json(err)
                }else{
                   res.json(createdExercise)
                }
            })
               
           }
        }
       
    })
  });

  app.get("/api/exercise/log?{userId}[&from][&to][&limit]",(req,res)={
      
  })
    






app.listen(port,(err)=>{
if(err){
    console.log(err);
}else{
    console.log("SERVER HAS STARTED...")  
}});