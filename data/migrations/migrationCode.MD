//PROJECTS

exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.boolean('completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};

//ACTIONS
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.boolean('completed').notNullable();
    table.integer('proj_ID').unsigned().unique();
    table.foreign('proj_ID').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};

//project bodies


//action bodies
[
	{
 "name": "Action 1 Name",
      "description": "Action 1 description",
      "proj_ID": 1
      },

{
	"name": "Action 2 Name",
      "description": "Action 2 description",
      "proj_ID": 1
}
]