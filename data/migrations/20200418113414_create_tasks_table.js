
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
      // auto incrmenting primary id
      table.increments();
      // description field, required
      table.text('description').notNullable();
      // notes field, not required
      table.text('notes');
      // project_id, foreign key, required
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('PROJECTS.id');
      // complted field , defaults to 0
      table.integer('completed').defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
