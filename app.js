// jshint esversion:6
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( "/", function ( req, res )
{
    res.sendFile( __dirname + "/cal.html" )
} );

app.post( "/", function ( req, res )
{
    var num1 = Number( req.body.num1 );
    var num2 = Number( req.body.num2 );

    var result = num1 + num2
    res.send( "The result : " + result )
} );

// BMI Calculator
app.get( "/bmical", function ( req, res )
{
    res.sendFile( __dirname + "/BMIcalculator.html" );
} );

app.post( "/bmical", function ( req, res )
{
    var width = parseFloat( req.body.width );
    var height = parseFloat( req.body.height );

    var bmi = width / ( height * height );
    res.send( "Your BMI  : " + bmi );
} );


app.listen( 3000, function ()
{
    console.log( "server started on port 3000!" )
} )