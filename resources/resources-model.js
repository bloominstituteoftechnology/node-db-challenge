const db = require('../data/db-config')

module.exports={
find, 
findById,
add
}

function find() {
    return db('resources')
}

function findById(id){
    return db('resources')
    .where({id})
    .first()
}

function add(resouce) {
    return db('resources')
    .instert(resouce, 'id')
    .then(([id]) => {
        return findById(id)
    })
    .catch(error => {
        console.log(error)
    })
}
