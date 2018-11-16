
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actionsContexts", function(tbl) {
        tbl.increments()

        tbl
        .integer("action_id")
        .unsigned()
        .references("id")
        .inTable("actions")

        tbl
        .integer("context_id")
        .unsigned()
        .references("id")
        .inTable("contexts")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actionsContexts")

};
