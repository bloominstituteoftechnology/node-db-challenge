
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table =>{
        table.increments('id');
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.boolean('finished').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
