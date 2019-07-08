let mongoose=require("mongoose");


let UserSchema=new mongoose.Schema( {
	name:{
		type:String,
		required:true
	},
	exercise:[
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Exercise"  //Should be defiened before!
		}
	]
})
module.exports=mongoose.model("User",UserSchema);