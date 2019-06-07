exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl)
    {
        tbl.increments("id");
        tbl.string('name', 255).unique('uq_projects_name');
        tbl.string('decription', 4095).notNullable();
        tbl.integer("completed").notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
  