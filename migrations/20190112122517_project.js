
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl){
    
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
