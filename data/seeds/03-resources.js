exports.seed = function(knex, Promise) {
    return knex("resources").insert([
      {
        resource_name: "a resource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "b resource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "c cresource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "d resource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "e resource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "f resource",
        resource_description: "read a resourece"
      }
    ]);
  };