const express = require('express');
const parser = require('body-parser');

const app = express();
const urlencodedParser = parser.urlencoded({extended:false});

app.use(urlencodedParser);
app.use(parser.json());

app.post("/sendContacts", (req, res) => {
    res.send("ebat");
});

app.listen(3000);
