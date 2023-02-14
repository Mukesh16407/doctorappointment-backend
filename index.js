const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const connect = require('./config/dbconfig.js');
require('dotenv').config();

app.use(express.json());

const userRoute = require("./routes/userRoutes.js");
const adminRoute  = require('./routes/adminRoutes');
const doctorRoute = require('./routes/doctorRoutes');


app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use('/api/doctor',doctorRoute);

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

app.get("/items/:my_item", async (req, res) => {
  let my_item = req.params.my_item;
  let item = await client.db("my_db")
              .collection("my_collection")
              .findOne({my_item: my_item})

  return res.json(item)
})


app.listen(PORT, async()=>{
    await connect()
    console.log(`Listening on port  ${PORT}`)
    
})