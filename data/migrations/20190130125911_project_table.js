
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.text('description');
        table.boolean('completed').defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
