
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', table => {
      table.speficType('actions', 'jsonb[]')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
