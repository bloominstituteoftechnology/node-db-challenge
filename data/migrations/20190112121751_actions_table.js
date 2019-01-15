
//Creating table for actions
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", table => {
        table.increments("id").primary();
        table.string("description").notNullable();
        table.string("notes");
        table.boolean("completed");
        table.integer("project_id").references("projects.id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
};
