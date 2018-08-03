
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        //primary key
        projects.increments();
//other fields
        projects.string('name', 128).notNullable();
});
};

exports.down = function(knex, Promise) {
  
};
