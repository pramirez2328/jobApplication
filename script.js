let day = document.getElementById( 'start' );
let todayTitle = document.querySelector( '.today' )
let todayCalendar = document.querySelector( '.today2' );

function handleDate( e ) {

  todayTitle.style.visibility = 'visible';
  todayCalendar.innerHTML = e.target.value;

}

day.onchange = handleDate;