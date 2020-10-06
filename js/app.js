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
	
	function updateProgress( len, tweetLength, pathLength, per ){
		
		if ( len <= tweetLength ) {
			var newOffset = pathLength - (pathLength * per) + 'px';
			progress.style.strokeDashoffset = newOffset;
		};
	}

	function updateColors( len, warningZone, dangerZone, tweetLength ){
		
		progress.classList.toggle('warn', len > warningZone && len < dangerZone);
		progress.classList.toggle('danger', len >= dangerZone);
		progress.classList.toggle('tragedy', len == tweetLength);
	}
	
	function updateCounter( len, tweetLength, counter ){
	
		counter.textContent = tweetLength - len;
		counter.classList.toggle('danger', len >= tweetLength);
	}

	updateProgress( len, tweetLength, pathLength, per );
	updateColors( len, warningZone, dangerZone, tweetLength );
	updateCounter( len, tweetLength, counter );
		
	});

	
