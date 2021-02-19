let day = document.getElementById( 'start' );
let todayTitle = document.querySelectorAll( '.today' )
let todayCalendar = document.querySelector( '#today2' );

let inputJobName = document.querySelector( "#inputJobName" );
let jobName = document.querySelector( "#jobName" );
let outputJobName = document.querySelector( "#jobName2" );

let inputCrewLeader = document.querySelector( '#crewLeader' );
let leader = document.querySelector( '#leader' );
let outputLeader = document.querySelector( '#leader2' );

let inputCrewMembers = document.querySelector( '#crewMembers' );
let crew = document.querySelector( '#crewBox' );
let outputLaborer = document.querySelector( '#laborers' );

let del = document.querySelectorAll( '.garbage' );

function handleDate( e ) {
  todayTitle[ 0 ].style.visibility = 'visible';
  todayTitle[ 1 ].style.visibility = "visible";

  todayCalendar.textContent = e.target.value;
}

function handleJobName( e ) {
  jobName.style.visibility = 'visible';
  outputJobName.textContent = e.target.value;
}

function handleLeaderName( e ) {
  leader.style.visibility = 'visible';
  outputLeader.textContent = e.target.value;
}

function handleCrewMembers( e ) {
  crew.style.visibility = 'visible';
  let li = document.createElement( 'li' );
  li.className += 'laborer';
  li.innerHTML = `${e.target.value} <span class="fas fa-trash-alt garbage"></span>`;
  outputLaborer.appendChild( li );
}

function handleDeleteMember( ) {
  //let childs = document.querySelectorAll( '.garbage' );
  outputLaborer.removeChild( outputLaborer.lastChild );
}

day.onchange = handleDate;
inputJobName.onchange = handleJobName;
inputCrewLeader.onchange = handleLeaderName;
inputCrewMembers.onchange = handleCrewMembers;

console.log( 'line 54', del );

outputLaborer.addEventListener( "click", handleDeleteMember );