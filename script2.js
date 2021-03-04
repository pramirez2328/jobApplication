let todayObject2 = JSON.parse( sessionStorage.getItem( 'object1' ) );
let compost = document.querySelector( "#compost" );
let bark = document.querySelector( "#bark" );
let gravel = document.querySelector( "#gravel" );
let screenings = document.querySelector( "#screenings" );
let soil = document.querySelector( "#soil" );
let sod = document.querySelector( "#sod" );
let mortar = document.querySelector( "#mortar" );
let concrete = document.querySelector( "#concrete" );
let cable = document.querySelector( "#cable" );
let draintale = document.querySelector( "#draintale" );
let edging = document.querySelector( "#edging" );
let button2 = document.querySelector( "#button2" );

console.log( todayObject2 );

function handle2Input( event ) {
  event.preventDefault( );
  todayObject2[ "compost" ] = compost.value;
  console.log( todayObject2 );
}

button2.addEventListener( "click", handle2Input );