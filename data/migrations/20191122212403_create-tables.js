
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 255);
        tbl.bool('completed')
            .notNullable()
            .default('0');
      })

      .createTable('resource', tbl => {
        tbl.increments();
        tbl.text('name', 255)
          .unique()
          .notNullable();
        tbl.text('description');
      })

      .createTable('task', tbl => {
        tbl.increments();
        tbl.text('description', 255)
            .notNullable();
        tbl.text('notes', 255);
        tbl.bool('completed')
            .notNullable()
            .default('0');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })

      .createTable('project_resource', tbl => {
        tbl.primary('resource_id', 'project_id');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resource')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};
