
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { project_id: 1, description: 'saudfhualsjdhflasjdhfla', "notes": "ALDSUHFALSJDFHA", "completed": 1 },
        { project_id: 1, description: 'lajshdflasdnbkjsahgdfa', "notes": "KUHLAHSGDFKHGAD", "completed": 1, },
        { project_id: 2, description: 'dkfhglasjdhfaldshfajsdhf', "notes": "SKHDJFKASHEKHBVBDVHNBV", "completed": 1, }
      ]);
    });
};
