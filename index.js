const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const urlencodedParser = parser.urlencoded({extended:false});

app.use(parser.json());
app.use(urlencodedParser);
app.use(express.static(__dirname));
/*app.use('/', express.static(path.join(__dirname, 'js')));*/

app.post("/contact", (req, res) => {
    console.log('yep');
    console.dir(req.body);
    res.send("post");
});

app.get("/contact", (req, res) => {
   res.send("get");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
});

app.listen(3000, () => console.log("server started"));
