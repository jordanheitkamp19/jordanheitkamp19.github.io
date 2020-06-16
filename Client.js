//Server for Superfight
//Jordan Heitkamp - June 15, 2020

//Client Constants
var SERVER_URL = "https://jordanheitkamp19.github.io/Server.js";

function httpGet() {
    var get = new XMLHttpRequest();
    get.onreadystatechange = function() {
        if ( get.readyState == 4 && get.status == 200 ) {
            httpGetCallbackFunction( get.responseText );
        }
    }
    get.open( "GET", SERVER_URL, true );
    get.send( null );
}

function httpGetCallbackFunction( response ) {
    console.log( JSON.stringify( response ) );
}
