// server.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
// Config

const config = require("./server/config");

/*
 |--------------------------------------
 | MongoDB
 |--------------------------------------
 */

const client = new MongoClient(
  config.MONGO_URI,
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

client.connect((err) => {
  const collection = client.db("events").collection("devices");
  // perform actions on the collection object
  console.log("connected to DB ", collection.namespace);
});
/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(cors());

// Set port
const port = process.env.PORT || "8083";
app.set("port", port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.use("/", express.static(path.join(__dirname, "./dist")));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

require("./server/api")(app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));
