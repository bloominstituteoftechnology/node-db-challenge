// t.increments('id');
// t
//   .string('name')
//   .notNullable()
//   .unique();
// t.string('description').notNullable();
// t.boolean('projectCompleteFlag');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'frog.gg',
          description:
            'a social analytics platform for League of Legends written by @frog_js on twitter',
          projectCompleteFlag: false
        },
        {
          id: 2,
          name: 'toDoList',
          description:
            'a todolist powered by React and Redux to cement web dev fundamentals',
          projectCompleteFlag: true
        },
        {
          id: 3,
          name: 'LambdaSchool',
          description:
            'an online, completely remote computer science academy that offers courses for NO upfront fees',
          projectCompleteFlag: true
        }
      ]);
    });
};
