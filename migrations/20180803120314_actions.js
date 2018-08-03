
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(actions) {
        //primary key
        actions.increments();

        actions
      .integer('project_id')//foreign key
      .unsigned()
      .notNullable()
      //.unique()//should this be unique
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    actions.string('description', 128).notNullable();
    actions.text('notes').notNullable();
    actions.boolean('completed').defaultTo(false);//completed flag
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
