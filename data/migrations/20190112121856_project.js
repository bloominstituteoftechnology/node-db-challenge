
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
      table.increments();
      table.text('name').notNullable();
      table.text('description');
      table.boolean('completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
