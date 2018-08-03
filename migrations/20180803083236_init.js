
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('project', (tbl) => {
      tbl.increments('id').primary();
      tbl.string('name');
      tbl.string('desc');
      tbl.boolean('isComplete');
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('action', (tbl) => {
      tbl.increments('id').primary();
      tbl.integer('project_id').references('id').inTable('project');
      tbl.string('desc');
      tbl.string('note');
      tbl.boolean('isComplete');
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('action'),
    knex.schema.dropTable('project'),
  ])
};
