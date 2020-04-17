exports.up = function(knex) {
  return knex.schema.createTable('connection', tbl => {
    tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('task_id')
      .notNullable()
      .references('id')
      .inTable('tasks')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('resource_id')
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('connection');
};
