exports.up = function(knex, Promise) {
  return createProjectsTable(knex).catch(err => reject(err));
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('projects')
    .catch(err => console.log(err));
};

const createProjectsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', project => {
        project.increments();
        project.string('name');
        project.string('description');
        project.boolean('completed');

        resolve(knex);
      })
      .catch(err => reject(err));
  });
};
