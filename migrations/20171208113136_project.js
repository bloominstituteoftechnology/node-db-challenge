
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments('id');
        tbl.text('name').notNullable();
        tbl.text('description').notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');    
};
