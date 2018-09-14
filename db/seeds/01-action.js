
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { project_id: 1, description: 'just finish these seeds to see something cool, like an error message!', notes: 'See? what I tell you', completed: false },
        { project_id: 2, description: 'well you need to buy a kite for starters', notes: 'fly a kite? really?', completed: false },
        { project_id: 3, description: 'practice typing exercise without looking', notes: 'Well thar wasnr so bad, wjars the duss abour?', completed: false }
      ]);
    });
};
