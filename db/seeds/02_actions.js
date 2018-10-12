
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          "action_name": "I need to find the worlds best teacher",
          "action_description": "Training to become a ninja master is hard and I need to find myself a good teacher.",
          "notes": "I must find someone who is not only awesome butt kicker, but has a strong moral code for justice",
          "completed": false,
          "project_id": 1
        },
        {
          "action_name": "I need to train",
          "action_description": "I will train hard day and night until I am a master of the deadly arts",
          "notes": "there is not mountain too high, not valley to small",
          "completed": false,
          "project_id": 1
        },
        {
          "action_name": "I need to get a utility belt",
          "action_description": "Batman had a utility best where he kept all his great ninja tools. I should do the same.",
          "notes": "Only the best ninja tools will do. I must look all this information up and see what I can find on ebay. Maybe I can get a good",
          "completed": false,
          "project_id": 2
        },
      ]);
    });
};
