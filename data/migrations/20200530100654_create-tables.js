
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments("id");
        tbl.string('name', 128).notNullable();
        tbl.string('description');
        tbl.boolean('completed', false).notNullable();
      })
      .createTable('resources', tbl => {
        tbl.increments('id', 128);
        tbl.string('name', 128).notNullable().unique();
        tbl.string('description', 128);
      })
      .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('description', 128).notNullable();
        tbl.string('note', 128);
        tbl.boolean('completed', false).notNullable();
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExist('tasks')
      .dropTableIfExist('resources')
      .dropTableIfExist('projects')
  );
};
