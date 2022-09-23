const express = require('express');
const path = require("path");
const multer  = require('multer');
const upload = multer({ dest: 'images/' });
const app = express();
const port = 5000;
const routes = require("./routes/routes");
const db = require("./connection/database");
const dbSessions = require("./connection/session");

console.log(dbSessions());

app.use(dbSessions());

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
app.use(upload.any());
app.use(express.static(path.join(__dirname,'./public')));
app.use(routes);

app.listen(port,()=>console.log(`server running on port: ${port}`));