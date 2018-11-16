
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments()
    table.string('description')
    table.string('notes')
    table.boolean('complete')
    table.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
