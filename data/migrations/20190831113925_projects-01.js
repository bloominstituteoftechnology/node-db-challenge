
exports.up = function(knex) {
    //was zoo names
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 128);
      tbl.boolean('completed');
      tbl.integer('resource_id')
        .unsigned()
        .references('id')
        // this table must exist
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('resource', tbl => {
      //was species
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
      tbl.string('description', 128);
    })
    .createTable('task', tbl => {
      //was animals
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.boolean('completed');
      // foreign key setup using knex
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
      //was zoo animals
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        // this table must exist
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
    });
  };
  
  exports.down = function(knex) {
    // reverse order of creation
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
      .dropTableIfExists('resources');
  };
  
