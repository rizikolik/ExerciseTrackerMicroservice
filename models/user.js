let mongoose=require("mongoose");


let UserSchema=new mongoose.Schema( {
	name:String,
	exercise:[
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Exercise"  //Should be defiened before!
		}
	]
})
module.exports=mongoose.model("User",UserSchema);