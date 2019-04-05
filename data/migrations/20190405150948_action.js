exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('action', (db) => {
        db.increments();
        db.integer('project_id').notNullable();
        db.string('description', 128).notNullable();
        db.string('notes').notNullable();
        db.boolean('completed').defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');

};

