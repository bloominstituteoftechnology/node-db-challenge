
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments(); // unique id
        tbl.string('name', 255).notNullable(); // name
        tbl.string('description', 255).notNullable(); //description
        tbl.boolean('isComplete', 255).defaultTo(false); // completed flag
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
