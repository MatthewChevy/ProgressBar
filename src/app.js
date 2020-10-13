/**
 * GRAB ELEMENTS
 */
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea'),
	counter  = document.querySelector('.counter');
	
let	tweetLength = 40,
	warningZone = Math.floor( tweetLength * (1/2) ),
	dangerZone  = Math.floor( tweetLength * (3/4) ),
    pathLength = true;

/**
 * SET DASH-ARRAY/OFFSET
 */

Orb.getPathLength( progress );
	
/** * ON INPUT* **/

textarea.addEventListener('input', function( event ) {

	let len = textarea.value.length,
		per = textarea.value.length / tweetLength,
		text = event.target.value;

	Orb.updateProgress( len, tweetLength, pathLength, per );
	Orb.updateColors( len, warningZone, dangerZone, tweetLength );
	Orb.updateCounter( len, tweetLength, counter );
	Orb.pasteContentFix( progress, text, tweetLength );
	Orb.deleteContentFix( event, counter, progress);
});








	
