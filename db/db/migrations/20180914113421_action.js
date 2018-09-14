
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {
        tbl.increments();

        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project');
  
        tbl.string('name', 128).notNullable().unique('action_name');
  
        tbl.string('description',128).notNullable();
  
        tbl.boolean('complete').defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')

};
