## Tables
Project
Actions

## Relationships

Project <-> Actions
1       <->  Many

Actions  <-> Project
Many    <-> 1

Recipe  <-> Step
1       <-> Many

## Table Layout

### Projects

|Column         |Type   |Rel.   |
|:---:          |:---:  |:---:  |
        |id             |Integer|Primary|   
|Name           |Text   |-      |
|description    |Text   |-      |
|completed      |boolean|-      |
|foreign id     |int    |-      |


### Actions

|Column            |Type       |Rel.       |
|:---:             |:---:      |:---:      | 
|id                |Integer    |Primary    |  
|description       |Text       |-          |
|notes             |Integer    |Foreign    |
|completed         |Integer    |Foreign    |
