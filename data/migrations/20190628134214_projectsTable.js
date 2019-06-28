
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id');

            tbl
                .string('name')
                .string('description')
                .notNullable()
                .unique()
                .boolean('completed');
        });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableExists('projects');
};
