const express = require("express");
const db = require("knex")(require("./knexfile").development);
const cors = require("cors");
const _ = require("lodash");

const server = express();

const booleanMap = (...args) => {
  return object => {
    return args.reduce(
      (acumulated, next) => (
        { ...acumulated, [next]: !!acumulated[next] }, object
      )
    );
  };
};

server.use(cors());
server.use(express.json());

server.route("/api/projects").get((req, res, next) => {
  db("projects")
    .then(response =>
      res.status(200).json(response.map(booleanMap("complete")))
    )
    .catch(next);
});

server.listen(8800, () => {
  console.log(`\n === API listening on port 8800 ===\n`);
});
