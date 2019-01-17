exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', (table) => {
         table.increments()
         table.string('adescription').notNullable();
         table.string('anotes').notNullable();
         table.boolean('acompleted').notNullable();
         table.integer('projects_id').unsigned().references('id').inTable('projects')
         table.timestamp('acreated_at').defaultTo(knex.fn.now())
       })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('actions')
 };
 