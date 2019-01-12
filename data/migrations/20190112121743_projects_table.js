
exports.up = function(knex, Promise) {
    return knex.schema.createTable("projects", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description");
        table.boolean("completed");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
};
