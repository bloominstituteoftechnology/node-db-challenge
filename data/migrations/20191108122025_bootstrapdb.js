
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {

    tbl.increments();

    tbl.string('name', 255).notNullable();
    tbl.string('description', 255);
    tbl.boolean('completed');

  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 255).notNullable();
      tbl.string('notes', 255);
      tbl.boolean('completed').notNullable().defaultTo(0);
      

       tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })

  .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 255);
  })

  .createTable('project_resource', tbl => {
      tbl.increments();
      tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('project')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .integer('resource_id')
      .unsigned()
      .references('id')
      .inTable('resource')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
