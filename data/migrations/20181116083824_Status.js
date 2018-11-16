
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Status',(table)=>{
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Status')
};
