const db = require('../db');
const mapper = require('./mapper');
const tbl = 'projects';

module.exports = {
    get: function(id) {
        let query = db(`${tbl} as t`);

        if(id) {
            query.where('t.id', id).first();

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
    },
    add: function(record) {
        return db(tbl)
            .insert(record)
            .then(([id]) => this.get(id));
    },
    edit: function(id, changes) {
        return db(tbl)
            .where('id', id)
            .update(changes)
            .then(count => count > 0 ? this.get(id) : null);
    },
    delete: function(id) {
        return db(tbl)
            .where('id', id)
            .del();
    }
};
