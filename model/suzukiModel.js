const mongoose=require("mongoose")

const suzukiModel=mongoose.model("valvos",{

model:{type:String},
brand:{type:String}

})

module.exports=suzukiModel