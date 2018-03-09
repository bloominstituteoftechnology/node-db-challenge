
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments('project_id');

    tbl.string('name').notNullable();

    tbl.string('description').notNullable();

    tbl.boolean('project_completed').defaultTo(false);

    tbl.timestamp('project_added').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
