
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {id: 1, project_id:'3', description:'This require some effor', notes:'gather everyones dirty laundry and place them in the washer then switch to the dryer'},
        {id: 2, project_id:'1', description:'Your daughter has asked for a build a bear for Christmas', notes:'You will need to take your lazy ass to the mall and deal with the people and assemble a bear'},
        {id: 3, project_id:'2', description:'Your family is starving and you need to cook', notes:'Get up and bake some chicken and throw some cheese on that b##ch'}
      ]);
    });
};
