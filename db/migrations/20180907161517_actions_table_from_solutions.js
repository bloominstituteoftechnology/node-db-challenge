
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
                tbl.increments();//auto increment and primary key // https://knexjs.org/#Schema-increments

                tbl.integer('project_id')//proper way to make a refrence 
                    .unsigned()//no idea what it means 
                    .notNullable()
                    .references('id')
                    .inTable('projects');
                tbl.string('description', 128).notNullable();
                tbl.string('notes')
                // tbl.integer('project_id')//this is the way not to make a refrence 
                tbl.bool('completed').notNullable().defaultTo(false);
            })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
  