let mongoose=require("mongoose");


let ExerciseSchema=new mongoose.Schema( {
	desc:String,
	duration:String,
	date:{
		type:Date
		
	}
	
});
module.exports=mongoose.model("Exercise",ExerciseSchema);