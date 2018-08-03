
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, name: 'RDBMS Sprint', description: 'Complete the Sprint Challenge', completed: false },
        { id: 2, name: 'Express Sprint', description: 'Complete the Sprint Challenge', completed: true },
        { id: 3, name: 'Front-End Sprint', description: 'Complete the Sprint Challenge', completed: true },
        { id: 4, name: 'Get the Gains', description: 'Get ripped', completed: false }
      ])
    })
}
