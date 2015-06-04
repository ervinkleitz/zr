//** declarations **//
var showFirst = false,
	showSecond = false,
	showThird = false;

//** event listeners **//
document.getElementById( 'more1' ).addEventListener( 'click', showMore1 );
document.getElementById( 'more2' ).addEventListener( 'click', showMore2 );
document.getElementById( 'more3' ).addEventListener( 'click', showMore3 );
//** event listeners **//

//** functions **//
function showMore1 (){
	if ( showFirst === false ) document.getElementById( 'drop1' ).style.visibility = 'visible';
	else document.getElementById( 'drop1' ).style.visibility = 'hidden';
	
	showFirst = !showFirst;
}

function showMore2 (){
	if ( showSecond === false ) document.getElementById( 'drop2' ).style.visibility = 'visible';
	else document.getElementById( 'drop2' ).style.visibility = 'hidden';
	
	showSecond = !showSecond;
}

function showMore3 (){
	if ( showThird === false ) document.getElementById( 'drop3' ).style.visibility = 'visible';
	else document.getElementById( 'drop3' ).style.visibility = 'hidden';
	
	showThird = !showThird;
}