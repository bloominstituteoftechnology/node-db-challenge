Project table
- increment()
- table.string('project_name').notNullable().unique()
- table.string('project_description').notNullable()
- table.boolean('completed')


Action table
- increment()
- table.string('action_description').notNullable();
- table.string('action_notes')
- table.boolean('completed')
- table.integer().unsigned()
- table.foreign('project_id').references('id').on('projects')


Context Table
- increment()
- table.string('context').notNullable()
- table.integer().unsigned()
- table.foreign('action_id').references('id').on('actions')



Project: Action
1: Many

Action : Contexts
Many : Many