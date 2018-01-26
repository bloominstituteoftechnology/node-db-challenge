exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments('id'); // primary key
      tbl.string('name', 128).notNullable();
      tbl.string('description', 128).notNullable();
      tbl.boolean('iscomplete');
      tbl.json('actionIds');
      tbl.json('contextIds');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('projects');
};

