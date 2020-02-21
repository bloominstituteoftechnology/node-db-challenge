/* jshint esversion: 6 */
const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources
};

//GET list of projects
function getProjects() {
  return db("projects");
}

//GET list of Resources

function getResources() {
  return db("resources");
}
