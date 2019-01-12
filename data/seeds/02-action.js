
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { description: 'Bake', notes: 'Bake birthday cake.', project_id: 1 },
        { description: 'Decorate', notes: 'Decorate birthday cake.', project_id: 1 },
        { description: 'Clean', notes: 'Clean house.', project_id: 1 },
        { description: 'Wrap', notes: 'Wrap birthday gifts.', project_id: 1 },
        { description: 'Enjoy', notes: 'Enjoy time with family.', project_id: 1 },
        { description: 'Finish', notes: 'Finish final module HW.', project_id: 2 },
        { description: 'Prepare', notes: 'Make sure I understand data modeling and normalization.', project_id: 2 },
        { description: 'Participate', notes: 'Complete Sprint Challenge in allotted time.', project_id: 2 },
        { description: 'Rock', notes: 'Ace Sprint Challenge!', project_id: 2 },
        { description: 'Back', notes: 'Bask in finally completing everything and enjoy time with my family.', project_id: 2 }
      ]);
    });
};
