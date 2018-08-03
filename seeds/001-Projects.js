
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {description:'this is the description field for project one', name: 'projectone'},
        {description:'this is the description field for project two', name: 'projecttwo'},
        {description:'this is the description field for project three', name: 'projectthree'}
      ]);
    });
};


// -A `project`
// can contain multiple actions and has:
//   -a unique Id. -
//   a name. -
//   a description. -
//   a flag that indicates
// if the project is complete or not.