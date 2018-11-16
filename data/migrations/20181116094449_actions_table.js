
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments()
        tbl.string('description', 255).notNullable()
        tbl.string('notes', 255)
        tbl.boolean('completed');
        tbl.integer('project_id').unsigned().references('id').inTable('projects')
      })
    }


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');

};
