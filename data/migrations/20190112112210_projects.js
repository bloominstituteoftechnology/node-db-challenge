
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments();
      table.integer('project_id').unsigned().unique();
      table.string('project_name').notNullable().unsigned().unique();
      table.text('proj_desc').notNullable();
      table.boolean('completed').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('projects')
};
