
exports.up = function(knex, Promise) {
        return createUsersTable(knex)
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
      
      function createUsersTable(knex) {
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
        console.log('dropping posts');
        return knex.schema.dropTableIfExists('posts');
      })
      .then(function() {
        console.log('dropping users');
        return knex.schema.dropTableIfExists('users');
      })
      .catch(error => console.log(error));
  };
  
  function createUsersTable(knex) {
    console.log('creating users table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('users', function(users) {
          users.increments();
          users.string('name', 128).notNullable();
          users.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('users table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createPostsTable(knex) {
    console.log('creating posts table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('posts', function(posts) {
          posts.increments();
          posts.text('text').notNullable();
          posts
            .integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
          posts.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('posts table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createTagsTable(knex) {
    console.log('creating tags table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('tags', function(tags) {
          tags.increments();
          tags
            .string('tag', 80)
            .notNullable()
            .unique('tag');
          tags.timestamp('createdAt').defaultTo(knex.fn.now());
  
          console.log('tags table created');
          resolve(knex);
        })
        .catch(error => reject(error));
    });
  }
  
  function createPostTagsTable(knex) {
    console.log('creating posttags table');
  
    return new Promise(function(resolve, reject) {
      knex.schema
        .createTable('posttags', function(posttags) {
          posttags.increments();
          posttags
            .integer('postId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('posts');
          posttags
            .integer('tagId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tags');
  
          console.log('posttags table created');
          resolve(knex);
        })
        .catch(error => console.log(error));
    });
  }
  