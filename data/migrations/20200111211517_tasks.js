exports.up = function(knex) {
    // represents the change we want to make to our schema
    return (
        knex.schema.createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_name', 128).notNullable();
            tbl.string('task_notes', 255)
            tbl.boolean('task_completed').defaultTo(false)
        })
    )
  };
  // represents undoing that change
  exports.down = function(knex) {
    return(
        knex.schema.dropTableIfExists('tasks')
    );
  };

