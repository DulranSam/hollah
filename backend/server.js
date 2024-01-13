const express = require("express");
const app = express();
const cors = require("cors");
const admin = express();
require("dotenv").config();
const port = process.env.PORT;
const cluster = process.env.CLUSTER;
const main = require("./routes/main");
const mongoose = require("mongoose");
const adminMain = require("./routes/adminMain");

app.use(express.json());
app.use(cors());
app.use("/main", main);

async function connectMongo() {
  await mongoose.connect(
    cluster,
    { useNewUrlParser: true },
    console.log("Connected to Cluster!")
  );
}

admin.use(express.json());
admin.use(cors({ origin: "*" }));
admin.use("/admin", adminMain);
admin.listen(8001, connectMongo(), console.log("Admin server up on port 8001"));

async function startClient() {
  app.listen(
    port,
    connectMongo(),
    console.log(`Client server up on port ${port}`)
  );
}

startClient();
