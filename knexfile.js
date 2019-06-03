// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/challenge.db3',
        },
        useNullAsDefault: true, // needed for sqlite
    },


};