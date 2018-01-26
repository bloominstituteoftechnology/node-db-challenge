
exports.up = function(knex, Promise) {
    return knex.schema.createTable('context', function(tbl) {
       tbl.increments();
       tbl.string('contexts', 128).notNullable().unique('contexts');
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('context');
};
