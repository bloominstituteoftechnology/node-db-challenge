
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.boolean('is_complete')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
