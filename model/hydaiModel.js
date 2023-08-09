const mongoose=require("mongoose")

const hyundaiModel=mongoose.model("hyudais",{
    model:{type:String},
    brand:{type:String}


})

module.exports=hyundaiModel