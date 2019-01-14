exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', (table) => {
         table.increments()
         table.string('description').notNullable();
         table.string('notes').notNullable();
         table.boolean('completed').notNullable();
         table.integer('projects_id').unsigned().references('id').inTable('projects')
         table.timestamp('created_at').defaultTo(knex.fn.now())
       })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('actions')
 };
 