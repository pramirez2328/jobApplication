let todayObject2 = JSON.parse( sessionStorage.getItem( "object1" ) );
let todayObject3 = JSON.parse( sessionStorage.getItem( "object2" ) );
document.querySelector( '#finalToday' ).textContent = todayObject2.today;
document.querySelector( "#finalJobName" ).textContent = todayObject2.jobName;
document.querySelector( "#finalForemanName" ).textContent = todayObject2.leaderName;

let crewMembersText = '';
if ( todayObject2.crewMembers.length != 0 ) {
  for ( let i = 0; i < todayObject2.crewMembers.length; i++ )
    crewMembersText += todayObject2.crewMembers[ i ];
} else {
  crewMembersText = `${todayObject2.leaderName} worked alone today!`;
}
document.querySelector( "#finalCrewMembers" ).textContent = crewMembersText;

for ( let property in todayObject3 ) {
  let material = document.createElement( 'p' );
  let materialNode = document.createTextNode( `${property}: ${todayObject3[ property ]}  ` );
  material.appendChild( materialNode );
  document.querySelector( '#finalDisplay' ).appendChild( material );
}