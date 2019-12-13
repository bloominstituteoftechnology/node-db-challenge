
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('p_name', 255).notNullable()
        tbl.string('p_description, 255')

        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('t_description', 255).notNullable()

        tbl.string('t_note', 255)

        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)

        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('r_name', 255).notNullable()
        tbl.string('r_description')
    })

    .createTable('projects_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
};
