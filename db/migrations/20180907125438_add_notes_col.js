
exports.up = function (knex, Promise) {
    return knex.schema.table('actions', function (tbl) {
        tbl.text('notes');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('actions', function (tbl) {
        tbl.dropColumn('notes');
    })
};
