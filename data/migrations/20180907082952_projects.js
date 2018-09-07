
exports.up = function(knex, Promise) {
   return knex.schema.createTable('projects', function(tbl) {
      tbl
         .increments();
      tbl
         .string('project')
         .notNullable()
         .unique('project');
      tbl
         .string('description');
      tbl
         .boolean('complete')
         .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('projects')
};
