
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', (t) => {
    t.string('actions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', (t) => {
    t.dropColumn('actions');
  })
};
