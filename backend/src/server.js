import express from "express";
import notesRoutes  from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import {setServers} from "node:dns/promises";


setServers(["1.1.1.1", "8.8.8.8"]); //overriding DNS server to avoiding DB connection querySRV error 
dotenv.config();
const app = express();

connectDB(); 
app.use("/api/notes", notesRoutes);

app.listen(5001, ()=>{
    console.log("Server is running on PORT: 5001")
}); 
