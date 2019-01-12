
exports.up = function(knex, Promise) {
    // Product schema
    return knex.schema.createTable('product', table => {
        table.increments()
        table.string('name');
        table.string('description');
        table.boolean('product_finished');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product');
};
