
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl =>{
        tbl.increments();
        tbl.text('name',128)
        .notNullable();
        tbl.text('description',128)
        .notNullable();
        tbl.boolean('completed')
        .notNullable();
    })

    .createTable('resources', tbl =>{
        tbl.increments();
        tbl.text('task_name')
        .notNullable();
        tbl.text('resource_description')
    })
    .createTable('tasks', tbl=>{
        tbl.increments();
        tbl.text('task-name', 128)
        .notNullable();
        tbl.text('notes')
        tbl.integer('project_id')
        .notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
  
};
