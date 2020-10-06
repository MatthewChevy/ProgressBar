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
textarea.addEventListener('input', function( event ) {

	var len = textarea.value.length,
		per = textarea.value.length / tweetLength;


	function handleProgress( len, tweetLength, pathLength ){

		if ( len <= tweetLength ) {
			var newOffset = pathLength - (pathLength * per) + 'px';
			progress.style.strokeDashoffset = newOffset;
		};
	};

		
	function handleColors(len, warningZone, dangerZone, tweetLength ){

		progress.classList.toggle('warn', len > warningZone && len < dangerZone);
		progress.classList.toggle('danger', len >= dangerZone);
		progress.classList.toggle('tragedy', len == tweetLength);
	};

	function handleCounter( len, tweetLength, counter){

		counter.textContent = tweetLength - len;
		counter.classList.toggle('danger', len >= tweetLength);
	};
	
	handleProgress( len, tweetLength, pathLength );
	handleColors( len, warningZone, dangerZone, tweetLength );
	handleCounter( len, tweetLength, counter)

});

