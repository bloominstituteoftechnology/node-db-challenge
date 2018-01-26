exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments('id'); // primary key
      tbl.string('description', 128).notNullable();
      tbl.string('notes');
      tbl.boolean('iscomplete');
      tbl
      .integer('projectId')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('actions');
};
