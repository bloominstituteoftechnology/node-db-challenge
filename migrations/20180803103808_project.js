
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments('id');

      tbl.string('name', 256)
      .notNullable()
      .unique()
      .defaultTo('project name here');

      tbl.text('description')
      .defaultTo('')
      .notNullable();
      
      tbl.boolean('completed')
      .notNullable()
      .defaultTo('false');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
