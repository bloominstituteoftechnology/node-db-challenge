exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', (t) => {
    t.increments('id').unsigned().primary();
    t.string('context').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');  
};
