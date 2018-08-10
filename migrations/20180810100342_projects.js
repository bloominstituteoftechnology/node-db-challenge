
exports.up = function(knex, Promise) {
 return knex.schema.createTable('projects', project => {
     project.increments()

     project.string('name')
     .notNullable()
     .unique()
 }) 
};

exports.down = function(knex, Promise) {
  
};
