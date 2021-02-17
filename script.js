let day = document.getElementById( 'start' ).value;
let todayCalendar = document.createElement( "h4" );

function handleDate( e ) {
  return `Today is: ${e.target.value}`
}

day.onchange = handleDate;
todayCalendar.textContent = 'Today is: ' + day;

outputInformation.appendChild( todayCalendar );