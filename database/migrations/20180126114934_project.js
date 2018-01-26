
exports.up = function(knex, Promise) {
        return createActionsTable(knex)
          .then(createProjectsTable)
          .then(createContextsTable)
          .then(createActionsTable)
          .catch(error => {
            console.log(error);
            reject(error);
          });
      };
      
exports.down = function(knex, Promise) {
        return knex.schema
          .dropTableIfExists('projectcontexts')
          .then(function() {
            console.log('dropping contexts');
            return knex.schema.dropTableIfExists('contexts');
          })
          .then(function() {
            console.log('dropping projects');
            return knex.schema.dropTableIfExists('projects');
          })
          .then(function() {
            console.log('dropping actions');
            return knex.schema.dropTableIfExists('actions');
          })
          .catch(error => console.log(error));
      };
      
      function createActionsTable(knex) {
        console.log('creating actions table');
      
        return new Promise(function(resolve, reject) {
          knex.schema
            .createTable('actions', function(actions) {
              actions.increments();
              actions.string('name', 128).notNullable();
              actions.timestamp('createdAt').defaultTo(knex.fn.now());
      
              console.log('actions table created');
              resolve(knex);
            })
            .catch(error => reject(error));
        });
      }
      
      function createProjectsTable(knex) {
        console.log('creating projects table');
      
        return new Promise(function(resolve, reject) {
          knex.schema
            .createTable('projects', function(projects) {
              projects.increments();
              projects.text('text').notNullable();
              projects
                .integer('actionId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('actions');
              projects.timestamp('createdAt').defaultTo(knex.fn.now());
      
              console.log('projects table created');
              resolve(knex);
            })
            .catch(error => reject(error));
        });
      }
      
      function createContextsTable(knex) {
        console.log('creating contexts table');
      
        return new Promise(function(resolve, reject) {
          knex.schema
            .createTable('contexts', function(tags) {
              contexts.increments();
              contexts
                .string('context', 80)
                .notNullable()
                .unique('context');
              contexts.timestamp('createdAt').defaultTo(knex.fn.now());
      
              console.log('contexts table created');
              resolve(knex);
            })
            .catch(error => reject(error));
        });
      }
      
      function createPostTagsTable(knex) {
        console.log('creating projectcontext table');
      
        return new Promise(function(resolve, reject) {
          knex.schema
            .createTable('projectcontext', function(projectcontext) {
              projectcontexts.increments();
              projectcontexts
                .integer('projectId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
              posttags
                .integer('contextsId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('context');
      
              console.log('projectcontext table created');
              resolve(knex);
            })
            .catch(error => console.log(error));
        });
      }
      
};

exports.down = function(knex, Promise) {
  
};
xports.up = function(knex) {
    return createUsersTable(knex)
      .then(createPostsTable)
      .then(createTagsTable)
      .then(createPostTagsTable)
      .catch(error => {
        console.log(error);
        reject(error);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('posttags')
      .then(function() {
        console.log('dropping tags');
        return knex.schema.dropTableIfExists('tags');
      })
      .then(function() {
        console.log('dropping projects');
        return knex.schema.dropTableIfExists('projects');
      })
      .then(function() {
        console.log('dropping actions');
        return knex.schema.dropTableIfExists('actions');
      })
      .catch(error => console.log(error));
  };
  
  function createActionsTable(knex) {
    console.log('creating actions table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('actions', function(actions) {
          actions.increments();
          actions.string('name', 128).notNullable();
          actions.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('actions table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createProjectsTable(knex) {
    console.log('creating projects table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('projects', function(projects) {
          projects.increments();
          projects.text('text').notNullable();
          projects
            .integer('actionId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actions');
          posts.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('projects table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createContextsTable(knex) {
    console.log('creating contexts table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('contexts', function(contexts) {
          contexts.increments();
          contexts
            .string('context', 80)
            .notNullable()
            .unique('context');
          tags.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('contexts table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createPostProjectTable(knex) {
    console.log('creating projectcontext table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('projectcontexts', function(projectcontexts) {
          projectcontexts.increments();
          projectcontexts
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
          projectcontexts
            .integer('contextId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('contexts');
  
          console.log('projectcontext table created');
          resolve(knex);
        })
        .catch(error => console.log(error));
    });
  }
  