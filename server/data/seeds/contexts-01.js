exports.seed = (knex, Promise) => {
  return knex('contexts').truncate()
    .then(() => {
      return knex('contexts').insert([
        { description: 'online' },
        { description: 'at work' },
        { description: 'at home' },
        { description: 'on computer' }
      ]);
    });
};

