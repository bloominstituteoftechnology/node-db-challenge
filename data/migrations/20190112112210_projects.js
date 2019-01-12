
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments('id');
      table.string('project_name').primary().notNullable().unique();
      table.text('proj_desc').notNullable();
      table.boolean('completed').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('projects')
};
