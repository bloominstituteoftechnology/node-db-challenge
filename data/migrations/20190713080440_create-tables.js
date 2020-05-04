exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('project_description')
      // .unsigned()
      .notNullable();
      tbl.boolean('project_completed')
      .notNullable()
      .defaultTo(false)
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.text('resource_name')
        // .unsigned()
        .notNullable();
      tbl.text('resource_description')
        .notNullable();
      // tbl.integer('scheme_id')
      //   .unsigned()
      //   .notNullable()
      //   .references('id')
      //   .inTable('project')
      //   .onUpdate('CASCADE')
      //   .onDelete('CASCADE');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('task_description', 128)
        // .unique()
        .notNullable();
      tbl.text('task_notes')
      // .unsigned()
      .notNullable();
      tbl.boolean('task_completed')
      .notNullable()
      .defaultTo(false)
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
    .dropTableIfExists('tasks')
};

/*
exports.up = function(knex) {
  return knex.schema
    .createTable('schemes', tbl => {
      tbl.increments();
      tbl.text('scheme_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};
*/