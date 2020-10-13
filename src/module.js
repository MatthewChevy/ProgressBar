var Orb = ( function(){

	function getPathLength( progress ) {
	 
		pathLength = Math.PI * ( progress.getAttribute('r') * 2 );
		
		progress.style.strokeDashoffset = pathLength + 'px';
		progress.style.strokeDasharray  = pathLength + 'px';
		
	};

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
	
	function pasteContentFix( progress, text, tweetLength ){

		if ( text.length >= tweetLength ){

			progress.style.strokeDashoffset = 0 + 'px';
			progress.classList.toggle('tragedy');

		};
	};

	function deleteContentFix( event, counter, progress){

		if( event.inputType === "deleteContentBackward" && counter.textContent >= 0 ){
			progress.classList.remove('danger');
			progress.classList.remove('warn');
		};
	};
	
    return{
		getPathLength,
        updateProgress,
        updateColors,
		updateCounter,
		pasteContentFix,
		deleteContentFix
    }

}());