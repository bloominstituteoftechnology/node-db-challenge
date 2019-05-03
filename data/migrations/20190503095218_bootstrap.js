exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();
        
        tbl
            .string('description', 128)
            .notNullable()
            .unique();
            
        tbl
            .boolean('complete')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('actions', tbl => {
        tbl.increments();

        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .string('description', 128)
            .notNullable()
            .unique();

        tbl
            .string('notes', 255)
            .unique();

        tbl
            .boolean('complete')
            .notNullable()
            .defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects');
};
