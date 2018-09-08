
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',(tbl)=>{
    tbl.increments()  
    
    tbl
        .integer('project_id')
        .unsigned().notNullable()
        .references('id')
        .inTable('projects');

    tbl.text('description').notNullable();
    tbl.text('notes');
    tbl.boolean('completed').defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
