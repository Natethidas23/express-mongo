import express from "express";
import cors from "cors";
import { getAllPlants, addPlant, deletePlant,updatePlant} from "./src/plants.js";
import { Collection, ObjectId } from "mongodb";

const PORT =3001;

const app =express();

app.use(cors());
app.use(express.json());

app.get ("/",(req,res)=>{
    res.send(`I a gRoot.`);
});
app.get("/plants",getAllPlants);
app.post("/plants",addPlant);
app.delete("/plants/:docId",deletePlant);
app.patch("/plants/:docId",updatePlant); // location is the end in the param


//api points / routes will go here...

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}...`);
});




