import express from "express";
import Parser from "rss-parser";

let parser = new Parser();
let app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Authorization, Content-Type, Accept, url"
    );
    next();
});

app.get("/rss", (req, res) => {
    const url = req.headers.url;
    console.log(url);
    parser
        .parseURL(url)
        .catch((err) => res.json({ err: err }))
        .then((end) => res.json(end));
});

app.listen(5000);
