
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('action')
      tbl.integer('project_id')
      tbl.string('note')
      tbl.string('action_complete')
  })
};

exports.down = function(knex, Promise) {
  
};
