exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('description').notNullable()
      tbl.text('notes')
      tbl.boolean('completed').defaultTo(false)
      //foregin key
      tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
      });
  };
  
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
  };
  