
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
        tbl.string('description', 200).notNullable();
        tbl.string('notes',400);
        tbl.count('flag');
   ;
      })
};

exports.down = function(knex, Promise) {
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('projects')
    };
};