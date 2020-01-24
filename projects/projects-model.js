const db = require( '../data/db-config.js' );

function find ()
{
    return db( 'users' );
}

function findById ( id )
{
    return db( 'users' ).where( { id } );
}

function findPost ( id )
{
    return db( 'posts as p' )
        .join( 'users as u', 'u.id', 'p.user_id' )
        .select( 'p.id', 'u.username', 'p.contents' )
        .where( { user_id: id } );
}

function add ( userData )
{
    return db( 'users' ).insert( userData );
}

function update ( changes, id )
{
    return db( 'users' ).where( { id } ).update( changes );
}

function Delete ( id )
{
    return db( 'users' ).where( { id } ).del();
}



module.exports = {
    find,
    findById,
    findPost,
    add,
    update,
    Delete
}