exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique();

    tbl.string('description');

    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
