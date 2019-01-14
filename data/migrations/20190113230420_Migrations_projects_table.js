exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', (table) => {
         table.increments()
         table.string('name').notNullable();
         table.string('description').notNullable();
         table.boolean('completed').notNullable();
         table.timestamp('created_at').defaultTo(knex.fn.now())
       })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('projects')
 };
 