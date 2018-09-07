
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments(); 
      tbl.string('step')
         .notNullable(); 
      tbl.string('extra_notes')
         .notNullable(); 
      tbl.boolean('completed')
         .defaultTo(false);
      tbl.integer('project_id')
         .notNullable()
         .references('id')
         .inTable('projects'); 
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions')
};
