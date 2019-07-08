let mongoose=require("mongoose");


let ExerciseSchema=new mongoose.Schema( {
	name:{
		type:String,
		required:true
	},
	desc:{
		type:String,
		required:true
	},
	duration:{
		type:Number,
		required:true
	},
	date:{
		type:Date,
		required:true
		
	}
	
});
module.exports=mongoose.model("Exercise",ExerciseSchema);