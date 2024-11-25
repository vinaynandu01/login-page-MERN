const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/admin");

const loginschema = new mongoose.Schema({
  uname: String,
  password: String,
  email: String,
});
const loginmodel = mongoose.model("record", loginschema);

app.post("/login", (req, resp) => {
  const { uname, pwd } = req.body;
  loginmodel.findOne({ uname: uname }).then((data) => {
    if (data) {
      if (data.password === pwd) {
        // Change data.pwd to data.password
        console.log(data);
        resp.json("Success");
      } else {
        resp.json("Password is incorrect");
      }
    } else {
      resp.json("No record found");
    }
  });
});
app.post("/signup", (req, resp) => {
  loginmodel
    .create(req.body)
    .then((person) => {
      console.log(req.body);
      resp.json(person);
    })
    .catch((err) => resp.json(err));
});
app.listen(5000, () => {
  console.log("Server started");
});

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const Client = new MongoClient(url);

// async function connect() {
//   let server = await Client.connect();
//   let admin = server.db("admin");
//   let colection = admin.collection("records");
//   let db = await colection.find({}).toArray();
//   console.log(db);
// }
// connect();
// import { useState } from "react";
// let [dt, setdt] = useState([]);
// export default function Mongodb({ setdt }) {
//   let data = connect().then((res) => {
//     setdt(res);
//   });

// }
