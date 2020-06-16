//Server for Superfight
//Jordan Heitkamp - June 15, 2020

//Server Constants
var LISTENING_PORT_NUMBER = 32000;

const http = require( 'http' );

//Request takes the clients post
//responseponse sends back to the client
const server = http.createServer( function( request, response ) {
    response.setHeader( 'Content-type', 'application/json' );
    response.setHeader( 'Access-Control-Allow-Origin', '*' );
    response.writeHead( 200 ); //status code HTTP 200 /OK

    var dataObj = {
        id: 123,
        name: "bob",
        email: "bob@work.org"
    };

    response.end( JSON.stringify( dataObj ) );
} );

server.listen( LISTENING_PORT_NUMBER, function() {
    console.log( `Listening on port: ${LISTENING_PORT_NUMBER}` );
} );
