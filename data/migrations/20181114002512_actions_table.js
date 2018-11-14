
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();

        tbl
        .integer('project_id')
        .notNullable()
        .references('id') // sets the column that the current column references as a foreign key
        .inTable('projects') // sets the "table" where the foreign key column is located after calling references

        tbl
        .string('description', 400)
        .notNullable();

        tbl
        .string('notes', 300)
        .notNullable();

        tbl.boolean('completed');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
