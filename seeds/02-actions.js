
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description:'bait out of cave, give food', notes:'you will probably die', completed:true},
        {description:'clean something with something until it sparkles', notes:'probably not going to happen', completed:false},
        {description:'type out this ridiculous description and seed it', notes:'what is the meaning of life?', completed:true}
      ]);
    });
};
