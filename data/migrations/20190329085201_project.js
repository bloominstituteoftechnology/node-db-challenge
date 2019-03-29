
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('project', function(tbl){
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable();

        tbl
        .string('description', 128)
        .notNullable;

        tbl
        .boolean('completed')
        .notNullable()
        
  })
  .createTable('action', function(tbl){
      tbl.increments();

      tbl
        .string('description', 128)
        .notNullable

        tbl
            .string('notes', 128)

        tbl
            .boolean('completed')

        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
