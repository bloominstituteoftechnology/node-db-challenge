
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", table => {
        table.increments();
        table.string("name", 128)
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions")
};
