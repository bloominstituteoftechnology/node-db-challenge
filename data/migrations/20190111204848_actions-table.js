
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
      table.increments();
      table.string('actionDescription').notNullable().unique();
      table.string('notes').notNullable();
      table.boolean('actionComplete').notNullable();
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').on('project');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action');
};
