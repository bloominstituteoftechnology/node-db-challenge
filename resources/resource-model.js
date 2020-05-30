const db = require("../data/db-config.js")
const knex = require("knex")

module.exports = {
    find,
    insert,
    connectResource
}

function find(projId) {
    return db("resources as r")
    .join("projectResourceDetail as prd", function() {
        this
        .on("prd.projectId", "=", knex.raw("?", [projId]))
        .andOn("prd.resourceId", "=", "r.id")
    })
}

function insert(resource) {
    return db("resources").insert(resource)
}

function connectResource(projectId, resourceId) {
    return db("projectResourceDetail").insert({
        projectId: projectId, resourceId: resourceId
    })
}