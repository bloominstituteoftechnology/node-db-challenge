exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .unique()
          .notNullable();
        
        tbl.string('description', 128);
  
        tbl.boolean('completed').notNullable();
      })
  
      .createTable('resources', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .unique()
          .notNullable();
        
        tbl.string('description', 128);
      })
  
      .createTable('tasks', tbl => {
        tbl.increments();
  
        tbl.string('description', 255).notNullable();
  
        tbl.string('notes', 128).notNullable();
  
        tbl.boolean('completed').notNullable();
  
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      
      .createTable('project_resources', tbl => {
        tbl.increments();
  
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
  
        tbl
          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects') 
  };
  
