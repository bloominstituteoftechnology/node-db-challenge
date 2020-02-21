- npm i -g knex
- knex init
- open knexfile.js and configure the connection
- useNullAsDefault: true // only needed for SQLite
- knex migrate:make create_characters_table
- knex migrate:latest

To add new column to table:

- knex migrate:make add_character_sigil
- build out new migration file
- run knex migrate:latest
