let day = document.getElementById( 'start' );
let todayTitle = document.querySelectorAll( '.today' )
let todayCalendar = document.querySelector( '.today2' );

function handleDate( e ) {
  todayTitle[ 0 ].style.visibility = 'visible';
  todayTitle[ 1 ].style.visibility = "visible";
  console.log( todayTitle );
  todayCalendar.innerHTML = e.target.value;
}

day.onchange = handleDate;