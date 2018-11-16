
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Status',(table)=>{
    
    table.increments("Id")
    table.string('Description').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Status')
};
