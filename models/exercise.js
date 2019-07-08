let mongoose=require("mongoose");


let ExerciseSchema=new mongoose.Schema( {
	desc:{
		type:String,
		required:true
	},
	duration:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		required:true
		
	}
	
});
module.exports=mongoose.model("Exercise",ExerciseSchema);