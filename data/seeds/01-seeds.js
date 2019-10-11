
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('p_r').truncate()
    .then(() => knex('resources').truncate())
    .then(()=> knex('tasks').truncate())
    .then(() => knex('projects').truncate())
    .then(() => {
      return knex('projects').insert([
        {id: 1, name: "Build Table",description: "Table will be built as a coffee talbe for the living room"},
        {id: 2, name: "Paint Portrait",description: "Used for decorating the living room"},
        {id: 3, name: "Plan Birthday Party",description: "2nd birthday for Jane! Will have family over."}
      ])
    })
    .then(()=> {
      return knex('resources').insert([
        {id: 1, name: "Wood", description: "oak wood or acacia wood"},
        {id: 2, name: "Blueprint", description: "For directing the schema to build from scratch."},
        {id: 3, name: "Paint", description: "an array of colors available"},
        {id: 4, name: "Canvas", description: "8 by 16 canvas"},
        {id: 5, name: "Baloons", description: "Pink baloons that have elephants displayed"},
        {id: 6, name: "cake decorations", description: "Elephant animal"}
      ])
    })
    .then(()=> {
      return knex('p_r').insert([
        {project_id: 1, resource_id: 1, location: 'Living Room'},
        {project_id: 1, resource_id: 2, location: 'Office'},
        {project_id: 2, resource_id: 3, location: 'Living Room'},
        {project_id: 2, resource_id: 4, location: 'Drawing Room'},
        {project_id: 3, resource_id: 5, location: 'First Floor'},
        {project_id: 3, resource_id: 6, location: 'Kitchen'}
      ])
    })
    .then(()=> {
      return knex('tasks').insert([
        {project_id: 1, description: "Go to Home Depot", notes: "The one in College Station"}, 
        {project_id: 1, description: "Research", notes: "How I want the table finished."},
        {project_id: 3, description: "Go to store", notes: "Purchase party decorations!"},
        {project_id: 3, description: "Clean House", notes: "Need to focus on cleaning the kitchen and living room."},
        {project_id: 3, description: "Prepare food", notes: "Need to make a 3 course meal for 20 guests."}
      ])
    })


};
