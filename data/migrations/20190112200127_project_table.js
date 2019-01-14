
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
    table.increments('id');
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.boolean('complete').notNullable();
    table.timestamps(); // use to compare age
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
