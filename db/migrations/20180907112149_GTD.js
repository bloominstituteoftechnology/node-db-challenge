
exports.up = function(knex) {
  //projects table
  return createProjectsTable(knex)
    .then(createActionsTable)
    .catch(error => {
        console.log(error);
        reject(error);
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('actions')
  .then(function() {
      console.log('dropping projects');
      return knex.schema.dropTableIfExists('projects');
    })
    .catch(error => console.log(error));
}; 

//Build a function to create a table of projects
function createProjectsTable(knex) {
    console.log('creating projects table');

    return new Promise(function(resolve,reject) {

    knex.schema
    .createTable('projects', function(projects){
        projects //ID
        .increments();
    
        projects //NAME
        .string('name', 128)
        .notNullable()
        .unique('name');
    
        projects //DESCRIPTION
        .text('description');
    
        projects //COMPLETED T/F
        .boolean('completed')
        .defaultTo(false);

        console.log('projects table created');
        resolve(knex);
      })
      .catch(error => reject(error));
    });
}

//Build a function to create a table of actions
function createActionsTable(knex) {
    console.log('creating actions table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('actions', function(actions) {
          actions.increments();
          actions.text('description').notNullable();

          actions.text('notes');
          
          actions //COMPLETED T/F
          .boolean('completed')
          .defaultTo(false);
  
          actions
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
  
          console.log('actions table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }

