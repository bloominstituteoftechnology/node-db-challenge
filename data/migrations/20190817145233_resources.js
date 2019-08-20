exports.up = function(knex, Promise) {
    return knex.schema.createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("description").nullable();
        tbl.boolean("complete").defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("resources");
};
