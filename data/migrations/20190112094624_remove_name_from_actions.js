
exports.up = function (knex, Promise) {
    return knex.schema.table('actions', table => {
        table.dropColumn('name');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('actions', table => {
        table.string('name').notNullable();
    });
};  
