const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://mighty-ducks:EavanRyan@cluster0.ajw5q1t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
/*async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("LoginInfo");
    const coll = db.collection("login");

    // insert code goes here
    const user = {user: "mason", password: 12345};

    const result = await coll.insertOne(user);
    // display the results of your operation
    console.log(user.insertedIds);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}*/

async function createAccount(){
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("LoginInfo");
        const coll = db.collection("login");
    
        // insert code goes here
        const user = {user: "zach", password: 43432};
    
        const result = await coll.insertOne(user);
        // display the results of your operation
        console.log(user.insertedIds);
    
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

async function login(){
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("LoginInfo");
        const coll = db.collection("login");
    
        // insert code goes here , will replace with front end input
        const userInfo = {username: "zach", password: 43432};
    
        const result = await coll.findOne(userInfo);
        // display the results of your operation
        console.log(user.insertedIds);
    
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

