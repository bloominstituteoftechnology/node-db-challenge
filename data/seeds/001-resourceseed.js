exports.seed = function(knex) {
  return knex("resource")
      .del()
      .then(function() {
          return knex("resource").insert([
              {
                  id: 1,
                  name: "buy coffee",
                  description: "gotta have it"
              },
              {
                  id: 2,
                  name: "buy pizza",
                  description: "wanna have it"
              },
              {
                  id: 3,
                  name: "buy fries",
                  description: "no more chips"
              },
              {
                  id: 4,
                  name: "buy soda",
                  description: "wash it down"
              }
          ]);
      });
};