exports.up = function (knex, Promise) {
        return knex.schema.createTable('actions', actions => {
                actions.increments();
                actions.integer('project_id')
                        .unsigned();
                actions.foreign('project_id')
                        .references('id')
                        .on('projects');
                actions.string('description')
                        .notNullable();
                actions.text('notes')
                actions.boolean('completed')
                        .defaultTo(false);
        })
};

exports.down = function (knex, Promise) {
        return knex.scheam.dropTableIfExists('actions')

};