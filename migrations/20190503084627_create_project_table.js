
exports.up = function(knex, Promise) {
    // CREATE TABLE `project` (
    //     `id` INTEGER,
    //     `name` STRING,
    //     `description` STRING,
    //     `completed` FALSE,
    //     PRIMARY KEY (`id`)
    //   );
  return knex.schema
    .createTable('projects', tbl => {
        tbl
            .increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique()
        
        tbl
            .string('description', 288)
            .notNullable()
            
        tbl
            .boolean('completed')
    })

    // CREATE TABLE `action` (
    //     `id` INTEGER,
    //     `description_todo` STRING,
    //     `notes` STRING,
    //     `project_id` INTEGER,
    //     PRIMARY KEY (`id`),
    //     KEY `FK` (`project_id`)
    //   );
    .createTablee('actions', tbl => {
        tbl
            .increments()

        tbl
            .string('description_todo', 288)
            .notNullable()
            
        tbl
            .string('notes', 288)
            .notNullable()

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
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
};
