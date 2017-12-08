// a unique id.
// a description of what needs to be done.
// a notes column to add additional information.
// a flag that indicates if the action has been completed.

exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', t => {
    t.increments('id');
    t.text('description').notNullable();
    t.text('notes');
    t.boolean('actionCompleteFlag');
  });
};

exports.down = function(knex, Promise) {};
