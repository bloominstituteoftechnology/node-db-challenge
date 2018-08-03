
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete("CASCADE");
        tbl
            .string('description')
            .notNullable();
        tbl
            .string('notes')
            .notNullable();
        tbl
            .boolean('completed')
            .defaultTo(false);
    })
    
  
};

exports.down = function(knex, Promise) {
  
};
