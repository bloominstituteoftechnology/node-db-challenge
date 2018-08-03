const db = require('../db');
const mapper = require('./mapper');

module.exports = {
    get: function(id) {
        let query = db('projects as p');

        if(id) {
            query.where('p.id', id).first();

            const promises = [query, this.getSubRecords(id)];

            return Promise.all(promises).then(function(results) {
                let [record, subRecords] = results;
                record.actions = subRecords;

                return mapper.recordToBody(record);
            });
        }

        return query.then(records => {
            return records.map(record => mapper.recordToBody(record));
        });
    },
    getSubRecords: function(id) {
        return db('actions as a')
            .where('a.projects_id', id)
            .then(records => records.map(record => mapper.recordToBody(record)));
    }
};
