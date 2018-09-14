
exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'strip bed',
          comments:
            'wash sheets on hot, comforter on cold',
        },
        {
          project_id: 1,
          description: 'vacuum',
          comments: 'check corners for dog hair',
        },
        {
          project_id: 1,
          description: 'burn a candle',
          comments: 'find a fall scent!!',
        },
      ]);
    });
};
