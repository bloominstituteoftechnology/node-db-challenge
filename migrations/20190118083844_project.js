
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl){
      tbl.increments();

      tbl.string('name', 128);
      tbl.text('description');
      tbl.boolean('complete');

      tbl.unique('name', 'uq_project_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
