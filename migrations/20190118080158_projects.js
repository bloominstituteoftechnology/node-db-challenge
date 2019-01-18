exports.up = function(knex, Promise) {
  
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 128);

        tbl.text('description');

        tbl.boolean('complete');

        tbl.unique('name', 'uq_projects_name')
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects', tbl => {
        tbl.dropUnique('uq_projects_name');
    });
  };

