
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl) {
        tbl.increment('id');

        tbl.enu('contextColumn', ['home', 'office', 'at computer']);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};
