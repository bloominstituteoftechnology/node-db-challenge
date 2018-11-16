
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1, 
          description: 'Build the frame for go-cart',
          notes: 'Use steel and welding or use wood and pvc pipes to build the frame'},
        {
          project_id: 1,
          description: 'Engine',
          notes:'Find used lawn mower motor for your engine'
        },
        {project_id: 1,
         description: 'Breaks, seat, steering wheel',
         notes:'Build out the rest of your go-cart including seats, breaks, steering wheel'}
      ]);
    });
};
