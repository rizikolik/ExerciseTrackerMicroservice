///REQUİREMENTS ///
const    express =        require("express"),
        mongoose =        require ("mongoose"),
       bodyParser=        require ("body-parser"),
        Exercise =        require("./models/exercise"),
             User=        require("./models/user");
                          require('dotenv').config();
        

const app=express();

//PORT 
const port=process.env.PORT||3000;
//CONFİGS
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });





////////////////ROUTES//////////////////
// 1) GET THE MAİN PAGE  /////

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

// CREATE A NEW USER  /////
app.post("/api/exercise/new-user",(req,res)=>{
    let name=req.body.username;
   User.findOne({"name":name},"-exercise",(err,foundedUser)=>{
        if(err){                                                    //CHECK IF THERE IS A USER WITH THIS NAME OR NOT
           res.send(err)
        }else {
           if(foundedUser){                                           //IF USER SAVED SEND THE PARAMATERS 
             res.json({name:name,id:foundedUser._id ,status:"saved user"})
           }else{
            let newUser={"name":name};
            User.create(newUser,(err,createdUser)=>{
                if(err){
                    res.json(err)
                }else{
                   res.json({name:name,id:createdUser._id,status:"new Created User"}) // USER CREATED 
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
      let userid=req.body.userid;
 User.findById(userid,(err,data)=>{
        if(err){
           res.send(err)
        }else{
            let newExercise={name:name,desc:desc,duration:duration,date:date};
            Exercise.create(newExercise,(err,createdExercise)=>{
                if(err){
                    res.json(err)
                }else{
                   data.exercises.push(createdExercise);
                   data.save();
                   res.send(data)
                }
            })
               
           }
        
       
    })
  });

  app.get("/api/exercise/log/:id",(req,res)=>{
      
      User.findById(req.params.id).populate("exercises").exec( function(err, foundedUser){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.send(foundedUser.exercises)
        }
    });
});
      
  
    






app.listen(port,(err)=>{
if(err){
    console.log(err);
}else{
    console.log("SERVER HAS STARTED...")  
}});