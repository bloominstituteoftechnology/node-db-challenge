
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.text('name').unique().notNullable();
    tbl.text('description').unique();
  })
.createTable('resources', tbl => {
    tbl.increments();
    tbl.text('name').unique().notNullable();
    tbl.text('description').unique();
})
.createTable('tasks', tbl => {
    tbl.increments();
    tbl.text('description').unique().notNullable();
    tbl.text('notes');
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks');
    tbl.boolean('completed').notNullable();
})
.createTable('project_resources', tbl => {
    tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
    tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');
    tbl.primary(['projects_id', 'resources_id'])
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
