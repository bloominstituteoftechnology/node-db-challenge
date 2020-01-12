exports.up = function(knex) {
    return (
        knex.schema.createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_name', 128).notNullable();
            tbl.string('task_notes', 255)
            tbl.boolean('task_completed').defaultTo(false)
        })
    )
  };
  
  exports.down = function(knex) {
    return(
        knex.schema.dropTableIfExists('tasks')
    );
  };

