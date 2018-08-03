
exports.up = function(knex, Promise) {
  return creatProjectTable(knex)
        .then(creatActionTable)
        .catch(error =>{
             console.log('error while creating table', error);
             reject(error);
        })
};

exports.down = function(knex, Promise) {
    console.log('droping project table');         
    return knex.schema
    .dropTableIfExists('project')
    .then(()=>{
        console.log('droping action table');     
        return knex.schema.dropTableIfExists('action')
    })
    .catch(error =>{
        console.log('error while droping table', error);
        reject(error);
   })

};
const creatProjectTable = knex =>{
    console.log(`creating project table`);

    return new Promise((resolve, reject)=>{
        knex.schema
        .createTable('project', tbl =>{
            tbl.increments();
            tbl
                .string('name', 256)
                .notNullable()
                .unique()
            tbl
                .string('description')
                .notNullable()
            
            tbl
                .boolean('isCompleted')
                .defaultTo(false)

            console.log(`project table created`);
            resolve(knex)
        })
        .catch(error => {
            console.log('error while creating project table', error);
             reject(error);
        })
    })
}

const creatActionTable = knex =>{
    console.log(`creating action table`);

    return new Promise((resolve, reject)=>{
        knex.schema
        .createTable('action', tbl =>{
            tbl.increments();
            tbl
                .string('name', 256)
                .notNullable()
                .unique()
            tbl
                .string('description')
                .notNullable()
            tbl
                .string('note')
            
            tbl
                .boolean('isCompleted')
                .defaultTo(false)
            tbl
                .integer('project_id')
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')            

            console.log(`action table created`);
            resolve(knex)
        })
        .catch(error => {
            console.log('error while creating action table', error);
             reject(error);
        })
    });
}

