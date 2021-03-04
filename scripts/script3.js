let todayObject3 = JSON.parse( sessionStorage.getItem( "object2" ) );
document.querySelector( '#finalToday' ).textContent = todayObject3.today;
document.querySelector( "#finalJobName" ).textContent = todayObject3.jobName;
document.querySelector( "#finalForemanName" ).textContent = todayObject3.leaderName;


for ( let property in todayObject3 ) {
  console.log( `the property is: ${property} and the value is: ${todayObject3[property]}` )
}