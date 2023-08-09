const express = require("express");
const mongoose = require("mongoose");
const suzukiModel = require("./model/suzukiModel");
const hyundaiModel = require("./model/hydaiModel");
const marutiModel = require("./model/marutiModel");

const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/cars")
  .then(() => console.log("DB is connected..."));

app.get("/", (req, res) => {
  res.send("API running.....");
});
app.post("/addvolvo",(req,res)=>{
    const payload=req.body;
    const newvalvo= new suzukiModel(payload)
    newvalvo.save()
    res.send("Added New Cars")
})
app.post("/delvovlo",async(req,res)=>{
    const payload=req.body;
    await suzukiModel.findOneAndRemove(payload)
    res.send("Record Deleted")
})
app.post("/addhyudai",(req,res)=>{
    const payload=req.body;
    const newhyndai= new hyundaiModel(payload)
    newhyndai.save()
    res.send("Added New Cars")
})
app.post("/delhydai",async(req,res)=>{
    const payload=req.body;
    await hyundaiModel.findOneAndRemove(payload)
    res.send("Record Deleted")
})
app.post ("/upodatehyundai",async(req,res)=>{
    const payload=req.body;
    await hyundaiModel.findOneAndUpdate(payload)
    res.send("Update SucessFulluy")
})
app.post("/addmaruti",(req,res)=>{
    const payload=req.body;
    const newmaruti= new marutiModel(payload)
    newmaruti.save()
    res.send("Added New Cars")
})
app.post("/delmaruti",async(req,res)=>{
    const payload=req.body;
    await marutiModel.findOneAndRemove(payload)
    res.send("Record Deleted")
})
app.post ("/upodatemaruti",async(req,res)=>{
    const payload=req.body;
    await marutiModel.findOneAndUpdate(payload)
    res.send("Update SucessFulluy")
})

app.get("/volvos", async (req, res) => {
  const result = await suzukiModel.find({});
  res.send(result);
});
app.get("/hyundais", async (req, res) => {
  const result = await hyundaiModel.find({});
  res.send(result);
});
app.get("/maruti", async (req, res) => {
  const result = await marutiModel.find({});
  res.send(result);
});

app.listen(5030, () => {
  console.log("Service is running on 5055");
});
