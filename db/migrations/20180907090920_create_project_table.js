
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
      // tbl.increments('id');// this is bad 
      tbl.increments();//sets primary key and auto increments this also sets the id

      // tbl.integer('id')//this is redundent and throws an error
      tbl.string('name', 128).notNullable().unique();//128 is how many characters in larger databases
      tbl.text('description');//not string 
      tbl.bool('completed')
        .defaultTo(false)
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
