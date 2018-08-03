
## KNEX migration and seed commands
COMMAND                             | DESCRIPTION                                       | NOTES 
--- | --- | ---  
`yarn knex`                         | shows commands 
`yarn knex migrate:make FILENAME`   | makes migrations file to create table
`yarn knex seed:make 01-FILENAME`   | makes seed data file                              | add version #
`yarn knex migrate:latest`          | creates sqlite3 database file                     | runs most up to data code
`yarn knex seed:run`                | seeds/adds test data to sqlite3 database file     | will run all
`yarn knex migrate:rollback`        | undos changes by running migration .down code     | After rollback, then re-migrate & re-seed, no-id

```javascript
// FK
tbl
    .integer('NEW_FIELD_ID')
    .unsigned()//optional, not needed for sqlite
    .notNullable()
    .reference('SOURCE_FIELD')
    .inTable('SOURCE_TABLE-NAME')
    .onUpdate('CASCADE')
    .onDelete('OPTION')

{
    dishName: 'Tacos', 
    recipeName: 'LA Street',
    shoppingList: {
        item: quanity,
        item: quanity,
        item: quanity
    },
    instructions: [
        'prep', 'cook', 'serve'
    ]
}
```
```sql
CREATE VIEW MY_VIEW AS 

select * from dishes
join recipes on dishes.id = recipes.dish_id
JOIN INSTRUCTIONS ON INSTRUCTIONS.recipe_id = RECIPES.ID
join shopping_list on shopping_list.recipe_id = recipes.id
where recipes.id = 3

order by [id:2] asc;

SELECT NAME, [NAME:1] FROM MY_VIEW
```