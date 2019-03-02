const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const urlencodedParser = parser.urlencoded({extended:false});

app.use(parser.json());
app.use(urlencodedParser);
app.use('/js', express.static(path.join(__dirname, 'js')));

app.post("/contact", (req, res) => {
    console.dir(req.body)
});

app.get("/contact", (req, res) => {
   res.send("get");
});

app.listen(3000, () => console.log("server started"));
