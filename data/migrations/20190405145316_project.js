exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('project', (db) => {
        db.increments();
        db.string('name', 128).notNullable();
        db.string('description').notNullable();
        db.boolean('completed').defaultTo(false);
        db.integer('id')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project')

};
