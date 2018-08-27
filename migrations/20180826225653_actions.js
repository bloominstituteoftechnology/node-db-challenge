
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        //primary key
        tbl.increments();

        //foreign key: projectId
        tbl
            .integer('projectId')
            .notNullable()
            .references('id')
            .inTable('projects')
  
        //description of what needs to be done.
        tbl
          .string('description', 128)
          .notNullable();
  
        // notes column to add additional information.
        tbl
          .string('notes', 128)
      
        //flag that indicates if the action is complete or not
        tbl  
          .boolean('completed')
          .defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
