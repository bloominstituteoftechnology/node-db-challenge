exports.up = function(knex, Promise) {
    return knex.schema.createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description")
            .notNullable();
           
        tbl.string("notes").nullable();
        tbl.boolean("complete").defaultTo(false);
        tbl.decimal("project_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tasks");
};
