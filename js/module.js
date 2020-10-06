var Orb = ( function(){

    function updateProgress( len, tweetLength, pathLength, per ){
		
		if ( len <= tweetLength ) {
			var newOffset = pathLength - (pathLength * per) + 'px';
			progress.style.strokeDashoffset = newOffset;
		};
    };

    function updateColors( len, warningZone, dangerZone, tweetLength ){
		
		progress.classList.toggle('warn', len > warningZone && len < dangerZone);
		progress.classList.toggle('danger', len >= dangerZone);
		progress.classList.toggle('tragedy', len == tweetLength);

	};

	function updateCounter( len, tweetLength, counter ){
	
		counter.textContent = tweetLength - len;
		counter.classList.toggle('danger', len >= tweetLength);
    };
	
    return{
        updateProgress: updateProgress,
        updateColors: updateColors,
        updateCounter: updateCounter
    }

}());