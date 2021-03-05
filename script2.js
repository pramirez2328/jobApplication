const todayObject2 = {};
const button2 = document.querySelector( "#button2" );
const material = document.querySelectorAll( '.material' );


function handle2Input( ) {

  for ( let i = 0; i < material.length; i++ ) {
    if ( material[ i ].value != 0 ) {
      todayObject2[ material[ i ].name ] = material[ i ].value;
    }
  }
  sessionStorage.setItem( "object2", JSON.stringify( todayObject2 ) );
}

button2.addEventListener( "click", handle2Input );