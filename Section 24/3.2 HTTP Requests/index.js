import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello !</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>I am a tech enthusiast. Currently, I'm pursuing my B.Tech from Bennett University & learning a lot.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Rajan Raj</h1><h2>+91 98751XXXXX</h2>")
})

app.listen(port, () => {
    console.log(`Server has started on ${port}`);
});