const mongoose=require("mongoose")

const marutiModel=mongoose.model("marutis",{

model:{type:String},
brand:{type:String}

})

module.exports=marutiModel