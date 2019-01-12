
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
      table.increments();
      table.string('projectName', 50).notNullable().unique();
      table.string('projectDescription', 255).notNullable();
      table.boolean('projectComplete').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
