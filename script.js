//** declarations **//
var showFirst = false,
	showSecond = false,
	showThird = false;

//** event listeners **//
document.getElementById( 'more1' ).addEventListener( 'click', showMore1 );
document.getElementById( 'more2' ).addEventListener( 'click', showMore2 );
document.getElementById( 'more3' ).addEventListener( 'click', showMore3 );
document.getElementById( 'all-tab' ).addEventListener( 'click', showAllTabFunc );
document.getElementById( 'requests-tab' ).addEventListener( 'click', showRequestsTabFunc );
document.getElementById( 'personal-tab' ).addEventListener( 'click', showPersonalTabFunc );
//** event listeners **//


//**************************//
//********** functions *****//
//**************************//

// displays the content of the All tab
function showAllTabFunc (){ 
	document.getElementById( 'all-tab-content' ).style.display = 'block';
	document.getElementById( 'all-tab' ).className = 'active-tab';
	document.getElementById( 'requests-tab' ).className = 'inactive-tab';
	document.getElementById( 'personal-tab' ).className = 'inactive-tab';
	document.getElementById( 'requests-tab-content' ).style.display = 'none';
	document.getElementById( 'personal-tab-content' ).style.display = 'none';
}
// displays the content of the Requests tab
function showRequestsTabFunc (){
	document.getElementById( 'requests-tab-content' ).style.display = 'block';
	document.getElementById( 'all-tab' ).className = 'inactive-tab';
	document.getElementById( 'requests-tab' ).className = 'active-tab';
	document.getElementById( 'personal-tab' ).className = 'inactive-tab';
	document.getElementById( 'all-tab-content' ).style.display = 'none';
	document.getElementById( 'personal-tab-content' ).style.display = 'none';
}
// displays the content of the Personal tab
function showPersonalTabFunc (){
	document.getElementById( 'personal-tab-content' ).style.display = 'block';
	document.getElementById( 'all-tab' ).className = 'inactive-tab';
	document.getElementById( 'requests-tab' ).className = 'inactive-tab';
	document.getElementById( 'personal-tab' ).className = 'active-tab';
	document.getElementById( 'all-tab-content' ).style.display = 'none';
	document.getElementById( 'requests-tab-content' ).style.display = 'none';
}
// shows the dropdown menu for the first entry in the All tab
function showMore1 (){
	if ( showFirst === false ) document.getElementById( 'drop1' ).style.visibility = 'visible';
	else document.getElementById( 'drop1' ).style.visibility = 'hidden';
	
	showFirst = !showFirst;
}
// shows the dropdown menu for the second entry in the All tab
function showMore2 (){
	if ( showSecond === false ) document.getElementById( 'drop2' ).style.visibility = 'visible';
	else document.getElementById( 'drop2' ).style.visibility = 'hidden';
	
	showSecond = !showSecond;
}
// shows the dropdown menu for the third entry in the All tab
function showMore3 (){
	if ( showThird === false ) document.getElementById( 'drop3' ).style.visibility = 'visible';
	else document.getElementById( 'drop3' ).style.visibility = 'hidden';
	
	showThird = !showThird;
}