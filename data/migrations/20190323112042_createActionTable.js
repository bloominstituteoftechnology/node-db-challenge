
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      //column 1 : id
    tbl
        .increments();
    
    //column 2 : name
    tbl
        .string('action')
        .notNullable();
    //column 3 : description
    tbl
        .text('notes')
        .notNullable();

    //column 4 : completed boolean
    tbl 
        .boolean('completed');

    //column five: foreign id to connect to projects
    tbl 
        .integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('actions');
};
