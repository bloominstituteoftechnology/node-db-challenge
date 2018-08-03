
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        //id
        tbl.increments();
        //name
        tbl
            .string('name')
            .notNullable()
            .unique();
        //desc
        tbl.text('description');
        //flag    
        tbl.boolean('completed').defaultTo(false);
    });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
