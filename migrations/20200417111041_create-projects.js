
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id').primary().unique();
            tbl.string('name').notNullable().unique();
            tbl.string('description')
            tbl.boolean('completed').notNullable().defaultTo(0)
        })
        .createTable('tasks', tbl => {
            tbl.increments('id').primary().unique();
            tbl.string('description').notNullable();
            tbl.string('notes')
            tbl.boolean('completed').notNullable().defaultTo(0);
            tbl
                .varchar('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
        })
        .createTable('resources', tbl => {
            tbl.increments('id').primary().unique();
            tbl.string('name').notNullable();
            tbl.string('description')
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
};
