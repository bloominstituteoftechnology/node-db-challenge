
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments("id");
        tbl.text('project_name', 128)
          .unique()
          .notNullable();
        tbl.string('description');
        tbl.boolean('completed', false)
          .notNullable();
      })
      .createTable('resources', tbl => {
        tbl.increments('id', 128);
        tbl.string('resource_name', 128)
          .notNullable()
          .unique();
        tbl.string('description', 128);
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      })
      .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('task_description', 128)
          .notNullable();
        tbl.text('note');
        tbl.integer('project_id')
          .unsigned()
          .references('projects.id')
        tbl.boolean('completed', false)
          .notNullable();
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExist('tasks')
      .dropTableIfExist('resources')
      .dropTableIfExist('projects')
  );
};
