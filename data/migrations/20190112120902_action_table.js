
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table =>{
        table.increments('id');
        table.string('description').notNullable();
        table.string('notes');
        table.boolean('finished').notNullable();
    })
};

exports.down = function(knex, Promise) {
  
};
