
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        //column 1 : id
      tbl
          .increments();
      
      //column 2 : name
      tbl
          .string('project_name')
          .notNullable();
      //column 3 : description
      tbl
          .text('description')
          .notNullable();
  
      //column 4 : completed boolean
      tbl 
          .boolean('completed');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('projects');
};
