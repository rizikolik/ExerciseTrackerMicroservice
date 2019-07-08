
  User.create(newUser,(err,createdUser)=>{
    if(err){
        res.json(err)
    }else{
        res.send(createdUser)
    }
})



User.findOne({name:name},(err,foundedUser)=>{
    if(err){
        res.send(err)
    }else{
        res.send(foundedUser)
    }
})