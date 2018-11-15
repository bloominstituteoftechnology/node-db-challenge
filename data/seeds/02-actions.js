exports.seed = function(knex, Promise) {
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          project_id: 1,
          description:
            "Assemble MP Forces and Station at Intervals throughout post",
          notes: "Permit use of force if kids get mouthy"
        },
        {
          project_id: 1,
          description: "Remove Clowns",
          notes:
            "Anyone dressed like a clown is to be immediately quarantined back to their quarters"
        },
        {
          project_id: 2,
          description: "Appoint Spc Stuart to lead this initiative",
          notes:
            "Specialist Stuart is to stand outside in the hail and send reports every fifteen minutes until this clears up"
        },
        {
          project_id: 2,
          description: "Appoint Gear to Rear Duty",
          notes:
            "Specialist Gear is to be on standby in the event Stuart is no longer able to fulfill his duty due to incompetence or hypothermia"
        },
        { project_id: "3", description: "Confidential", notes: "Confidential" }
      ]);
    });
};
