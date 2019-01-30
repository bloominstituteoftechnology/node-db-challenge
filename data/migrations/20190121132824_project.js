
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('description')
        table.boolean('is_complete').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
