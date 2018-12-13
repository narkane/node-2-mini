const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const controller = require("./controller");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);

  //   dbInstance
  //     .new_planes()
  //     .then(planes => console.log(planes))
  //     .catch(err => console.log(err));

  //   dbInstance
  //     .get_planes()
  //     .then(planes => {
  //       return console.log(planes);
  //     })
  //     .catch(err => {
  //       return console.log(err);
  //     });
});

app.use(bodyParser.json());
app.use(cors());

app.get("/api/planes", controller.get_planes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
