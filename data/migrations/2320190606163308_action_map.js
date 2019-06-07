exports.up = function(knex, Promise) {
    return knex.schema.createTable('action_map', function(tbl)
    {
        tbl.increments("id");
        tbl.integer("project_id").notNullable().references('id').inTable('projects').onDelete('CASCADE');
        tbl.integer("action_id").notNullable().references('id').inTable('actions').onDelete('CASCADE');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action_map');
  };
  