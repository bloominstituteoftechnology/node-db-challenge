```javascript
//PROJECTS
{
    id: 1, // AUTO-SET
    name: 'text', // REQUIRED & UNIQUE
    description: 'text', 
    completed: false // DEFAULT SET TO FALSE
}
//ACTIONS
{
    id: 1, // AUTO-SET
    project_id: 1, // REQUIRED & FK
    description: 'text', // REQUIRED
    notes: 'text',
    completed: false // DEFAULT SET TO FALSE
}
```