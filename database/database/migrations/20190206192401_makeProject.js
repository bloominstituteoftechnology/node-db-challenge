
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
        tbl.string('name', 200).notNullable();
        tbl.string('description',300);
        tbl.count('isDone');
      tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
    })
};

exports.down = function(knex, Promise) {
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('projects')
    };
};
