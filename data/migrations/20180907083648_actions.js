
exports.up = function(knex, Promise) {
   return knex.schema.createTable('actions', function(tbl) {
      tbl
         .increments();
      tbl.string('action')
         .notNullable()
         .unique('action'); 
      tbl
         .string('notes');
      tbl
         .boolean('complete')
         .defaultTo(false);
      tbl
         .integer('project_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('projects');
   })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('actions')
};
