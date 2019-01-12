
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl=>{
    tbl.increments();
    tbl.integer('project_id').unsigned();
    tbl.foreign('project_id').references('id').on('projects');
    tbl.string('description').notNullable();
    tbl.string('notes');
    tbl.boolean('completed').defaultTo(false);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableifExists('actions');
};
