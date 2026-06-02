const express = require("express")
const cors = require("cors")


const app = express()
app.use(cors())
app.get("/", (req, res)=>{
    try{
      res.send("Hello world")

    }catch(err){
        console.error(err)
    }
})

app.post("/", (req, res) =>{
    try{
     console.log(res.body)
     console.log("Happy brother")
    }catch(err){
        console.error(err)
    }
})

app.get("/data" , (req, res)=>{
    try{
     console.log("Hello Hi")
    }catch(err){
        console.log(err)
    }
})

app.listen(5000, ()=>{
    console.log("Backend Server is Connected")
})