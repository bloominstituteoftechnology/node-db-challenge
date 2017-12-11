exports.up = function(knex, Promise) {
  return knex.schema.createTable('Actions', tbl => {
    tbl.increments('id'); // primary key
    tbl
      .integer('projectId')
      .notNullable()
      .references('id')
      .inTable('Projects')
      .onUpdate('CASCADE') // if a project's id is updated update this value
      .onDelete('CASCADE'); // if a project is deleted, delete the Action
    tbl.string('description', 1024).notNullable();
    tbl.string('notes').notNullable();
    tbl.bool('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Actions');
};
