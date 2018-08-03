
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', tbl => {
    tbl.increments('id');

    tbl.text('description')
    .notNullable()
    .defaultTo('action description');

    tbl.text('notes')
    .notNullable()
    .defaultTo('the action notes');

    tbl.boolean('completed')
    .notNullable()
    .defaultTo('false')

    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('project')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};
