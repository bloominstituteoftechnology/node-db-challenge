exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments();
    tbl.string('p_name').notNullable();
    tbl.string('p_description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
