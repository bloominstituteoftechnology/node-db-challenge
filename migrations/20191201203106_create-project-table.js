
exports.up = function(knex) {
  return knex.schema
  .createTable("project", tbl => {
     tbl.increments('id'); 
     tbl.text('project_name', 128).unique().notNullable();
     tbl.text("description", 255);
     tbl.boolean('project').notNullable().defaultTo(false);
  })
.createTable("task", tbl => {
    tbl.increments('id'); 
    tbl.text('task_name', 128).unique().notNullable();
    tbl.text("notes", 255);
    tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project');
    tbl.boolean('task').notNullable().defaultTo(false);
})
.createTable('resources', tbl => {
    tbl.increments('id');
    tbl.text('resource_name', 128).unique().notNullable();
    tbl.text("description", 255);
    tbl.integer('task_id').unsigned().notNullable().references('id').inTable('task')
})

};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('project')
  .dropTableIfExists('task')
  .dropTableIfExists('resource');
};
