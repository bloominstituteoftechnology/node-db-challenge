
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
       tbl.increments();
       tbl.text('description').notNullable();
       tbl.text('notes').notNullable();
       tbl.boolean('complete').defaultTo(false);
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
