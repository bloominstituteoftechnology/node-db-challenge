exports.up = function(knex, Promise) {
    return knex.schema.createTable('projectcontexts', function(tbl) {
      tbl.increments('id'); // primary key
  
      tbl
        .integer('projectId')
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('contextId')
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projectcontexts');
  };