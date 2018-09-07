exports.up = (knex, Promise) => {
  return knex.schema.createTable('contexts', t => {
    t.increments();
    t.string('description').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('contexts');
};
