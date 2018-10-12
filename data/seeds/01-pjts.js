
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pjts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pjts').insert([
        {pjts_nme: 'Sprint WIP', pjts_dsc: 'Work In Progress', pjts_cpt: true},
        {pjts_nme: 'Sprint MVP', pjts_dsc: 'Minimum Viable Product', pjts_cpt: false},
        {pjts_nme: 'Sprint Stretch', pjts_dsc: 'Above And Beyond', pjts_cpt: false}
      ]);
    });
};
