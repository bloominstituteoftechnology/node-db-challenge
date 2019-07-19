
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments('id'),
      tbl.string('name'),
      tbl.text('description'),
      tbl.boolean('complete')

  })
  .createTable('actions', tbl => {
      tbl.increments('id'),
      tbl.text('description'),
      tbl.string('notes'),
      tbl.boolean('complete'),
      tbl.integer('project_id').references('id').inTable('projects')
  })
};

exports.down = function(knex) {
  dropIfTableExists('projects');
  dropIfTableExists('actions');
};
