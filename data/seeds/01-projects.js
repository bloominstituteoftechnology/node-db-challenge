
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Create Calculator', description: 'A calculator to specifically calculate prices of stocks', complete: false},
        {name: 'Create Portfolio Page', description: 'A personal website displaying all my work', complete: false},
        {name: 'Create Responsive Website', description: 'A feature rich website that can be displayed on mobile, tablet, and desktop', complete: true}
      ]);
    });
};
