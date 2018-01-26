import { Promise } from "../../../../../../Library/Caches/typescript/2.6/node_modules/@types/bluebird";


exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {
  
};

function projectsTable(knex) {
  console.log('creating projects table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', (projects) => {
        projects.increments();
        projects.string('name', 128).notNullable();
        projects.text('text')
        projects.boolean('completed').defaultTo('false');

      console.log('projects table created');
      resolve(knex);
      })
      .catch(error => reject(error));
  });
};

function actionsTable(knex) {
  console.log('creating actions table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', (actions) => {
        actions.increments();
        actions.text('description').notNullable();
        actions.text('notes');
        actions.boolean('completed').defaultTo('false');
        actions
          .integer('projectsId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');

        console.log('actions table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

function contextTable(knex) {
  console.log('creating context table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('context', (context) => {
        context.increments();
        context.string('context', 128).notNullable()
      })
  })
}