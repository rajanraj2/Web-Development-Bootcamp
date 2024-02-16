import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var firstName = "";
var lastName = "";
var fullName = "";
var chrCount = 0;

app.use(bodyParser.urlencoded({ extended: true }));

function count(req, res, next){
  firstName = req.body["fName"];
  lastName = req.body["lName"];
  fullName = firstName + lastName;
  chrCount = fullName.length;
  // for (let i=0; i<fullName.length; i++){
  //   chrCount++;
  // };
  
  // chrCount = firstName.length + lastName.length;
  
  next();
}

app.use(count);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {countChr: chrCount});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
