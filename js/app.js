/**
 * GRAB ELEMENTS
 */
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea'),
	counter  = document.querySelector('.counter');

var	tweetLength = 40,
	warningZone = Math.floor( tweetLength * (1/2) ),
	dangerZone  = Math.floor( tweetLength * (3/4) );


/**
 * SET DASH-ARRAY/OFFSET
 */
var pathLength = Math.PI * ( progress.getAttribute('r') * 2 );

progress.style.strokeDashoffset = pathLength + 'px';
progress.style.strokeDasharray  = pathLength + 'px';


/**
 * ON INPUT
 */
textarea.addEventListener('input', function() {

	var len = textarea.value.length,
		per = textarea.value.length / tweetLength;

	Orb.updateProgress( len, tweetLength, pathLength, per );
	Orb.updateColors( len, warningZone, dangerZone, tweetLength );
	Orb.updateCounter( len, tweetLength, counter );
		
	});

	
