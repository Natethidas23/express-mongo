import {db} from "./connectdb.js"
import { ObjectId } from "mongodb";

const coll = db.collection("plants");

//CRUD:GET
export async function getAllPlants(req,res){
    const plants= await db.collection('plants').find({}).toArray();
    res.send(plants);
}


//CRUD:POST
export async function addPlant(req,res){
const newPlant= req.body;
await db.collection('plants').insertOne(newPlant);
res.status(201).send({message:"new plant added"});

}


//CRUD:DELETE
export async function deletePlant(req,res) {
    const docId = { "_id": new ObjectId(req.params.docId) };

    await coll.deleteOne(docId);
    res.status(201).send({message:"plant has been sadly deleted"});
}

//CRUD: UPDATE - update
export async function updatePlant(req,res){
    const docId = {"_id":new ObjectId(req.params.docId)};
    const updatePlant= {$set: req.body};
    
    await coll.updateOne(
        {'_id':docId},
        {$set:{updatePlant}}
    );
    res.status(201).send({message:"plant has been updated"})
}