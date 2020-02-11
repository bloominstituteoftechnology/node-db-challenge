exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl
          .string('name', 255)
          .notNullable()
          .unique();
  
        tbl.text('description');
  
        tbl.boolean('completed').defaultTo(false);
  
      //   tbl.timestamps(true, true);
      })
      .createTable('actions', tbl => {
        tbl.increments();
        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        
  
          tbl.string('description', 128).notNullable();
          tbl.text('notes').notNullable();
          tbl.boolean('completed').defaultTo(false);
          tbl.timestamps(true, true);
  
          
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions').dropTableIfExists('projects');
  };