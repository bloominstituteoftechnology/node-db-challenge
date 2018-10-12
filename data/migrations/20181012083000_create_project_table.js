exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', function(tbl){
        tbl.increments();
        tbl.string('name',255).notNullable();
        tbl.string('description',255);
        tbl.integer('completed')
            .unsigned()
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};