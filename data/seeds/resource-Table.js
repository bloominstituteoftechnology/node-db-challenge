
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { id: 1, resource_name: 'Tickera', resource_desc: 'WordPress Event Ticketing System.' },
        { id: 2, resource_name: 'LayerSlider', resource_desc: 'Responsive WordPress Slider Plugin.' },
        { id: 3, resource_name: 'Pagely', resource_desc: 'Managed WordPress Hosting' }
      ]);
    });
};
