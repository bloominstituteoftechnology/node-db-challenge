const express = require("express");
const db = require("knex")(require("./knexfile").development);
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () =>
  console.log(
    "\n=== Server up and running on port 5000 unless you changed it === \n"
  )
);
