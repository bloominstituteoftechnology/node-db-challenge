
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('atns').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('atns').insert([
        {pjts_id: 1, atns_dsc: 'Build Database', atns_nts: 'migrations', atns_cpt: true},
        {pjts_id: 1, atns_dsc: 'Build API', atns_nts: 'routes & modeling', atns_cpt: false},
        {pjts_id: 2, atns_dsc: 'Test Application', atns_nts: 'test application', atns_cpt: false},
        {pjts_id: 3, atns_dsc: 'Add Seeding', atns_nts: 'add support for data seeding', atns_cpt: true},
        {pjts_id: 3, atns_dsc: 'Implement Contexts', atns_nts: 'add support for contexts', atns_cpt: false}
      ]);
    });
};
