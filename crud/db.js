const {MongoClient, ObjectId} = require("mongodb");
async function connect(){
  if(global.db) return global.db;
  const conn = await MongoClient.connect("mongodb://localhost:27017/");
  if(!conn) return new Error("Can't connect");
  global.db = await conn.db("workshop");
  return global.db;
}

async function findAll(){  
    const db = await connect();
    return db.collection("customers").find().toArray();
}

async function insert(customer){
    const db = await connect();
    return db.collection("customers").insertOne(customer);
}

async function findOne(id){ 
    const db = await connect(); 
    const objId = new ObjectId(id);
    return db.collection("customers").findOne(objId);
}

async function update(id, customer){
    const filter = {_id: new ObjectId(id)};
    const db = await connect();
    return db.collection("customers").update(filter, customer);
}

async function deleteOne(id){
    const db = await connect(); 
    const filter = {_id: new ObjectId(id)};
    return db.collection("customers").deleteOne(filter);
}

module.exports = { findAll, insert, findOne, update, deleteOne }