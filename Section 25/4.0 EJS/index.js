import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var greet;

function whichDay(req, res, next) {
    const d = new Date();
    let day = d.getDay(); 
    
    if (day === 0 || day === 6 ){
        greet = "Hey! It's the weekend, it's time to have fun!";
    }
    else {
        greet = "Hey! It's a weekday, it's time to work hard!";
    };
    next();
}

app.use(whichDay);

app.get("/", (req, res) => {
    res.render("index.ejs", {greetUser: greet});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
