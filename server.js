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


app.listen(5000, ()=>{
    console.log("Backend Server is Connected")
})