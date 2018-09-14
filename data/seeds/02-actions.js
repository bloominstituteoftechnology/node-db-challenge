
exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'strip bed',
          notes:
            'wash sheets on hot, comforter on cold',
        },
        {
          project_id: 1,
          description: 'vacuum',
          notes: 'check corners for dog hair',
        },
        {
          project_id: 1,
          description: 'burn a candle',
          notes: 'find a fall scent!!',
        },
      ]);
    });
};
