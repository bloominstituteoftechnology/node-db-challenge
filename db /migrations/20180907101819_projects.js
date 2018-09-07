
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(table){
      table.increments(); 
      table
        .string()
        .string()
  })
};

exports.down = function(knex, Promise) {
  
};
