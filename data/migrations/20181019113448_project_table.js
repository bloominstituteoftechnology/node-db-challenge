
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects',function(tbl){
    tbl.increments()
    tbl.string('description');
    tbl.string('name');
    tbl.boolean('completed')
  })
};

exports.down = function(knex, Promise) {

};
