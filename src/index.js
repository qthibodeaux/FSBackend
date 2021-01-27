const express = require("express");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const db = require('./db/models/index')

const port = 4000;

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  try {
    db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  res.sendStatus(200);
});

app.post("/register", (req, res) => {
  console.log('Got Body: ', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
