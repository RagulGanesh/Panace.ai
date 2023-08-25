const express=require('express')
const app=express();
const cors=require('cors')

app.use(cors())

app.use(express.json())
const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://rohithgundaram:FWw1u2VXXzsxYgbw@cluster0.msplvac.mongodb.net/Condition_DB")

const Conditions=require('./Models/Conditions')

app.listen(8000,()=>{
    console.log('listening on port 8000')
})

app.get('/',async(req,res)=>{
    try{
        const data=await Conditions.find();
        res.json(data)
    }catch(err){
        console.log(err)
    }
})