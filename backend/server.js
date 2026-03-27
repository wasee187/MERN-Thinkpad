import express from "express";

const app = express();

app.get("/api/notes", (req,res)=>{
    console.log("You have 5 notes");
}); 
app.listen(5001, ()=>{
    console.log("Server is running on PORT: 5001")
}); 
