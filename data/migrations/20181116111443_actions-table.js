exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', function(table) {
		table.increments()
        table.string('description').notNullable()
        table.string("notes")
        table.boolean("completed")
        table.integer('project_id').notNullable().unsigned().references('id').inTable('projects')
	})
}
 exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions')
}