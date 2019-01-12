exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.integer('project_id').unsigned();
    tbl.foreign('project_id').references('projects.id');
    tbl.string('action_description').notNullable();
    tbl.string('additional_information');
    tbl.boolean('completed').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
