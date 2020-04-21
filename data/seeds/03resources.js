
exports.seed = async function(knex) {

      await knex('resource').insert([
        {
          project_id: 1,
          resource_name: "VS Code",
          description: "Download this and keep ready"
        },
        {
          project_id: 1,
          resource_name: "Computer",
          description: "Need windows machine with installed programs"
        },
        {
          project_id: 2,
          resource_name: "Vacuum",
          description: "Its generally kept in the laundry room"
        },
        {
          project_id: 2,
          resource_name: "Broom",
          description: "Its kept behind the vaccum"
        }
      ])
    
};
