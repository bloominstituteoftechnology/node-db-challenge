
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl
      .string('name')
      .notNullable()
      .unique('project');

      tbl
      .string('description');

      tbl
      .boolean('complete')
      .defaultTo('false');

  })

};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('projects');
};
