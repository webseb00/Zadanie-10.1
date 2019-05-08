var elem = document.querySelector('.main-carousel'),
	resetBtn = document.querySelector('#resetButton'),
	progressBar = document.querySelector('.progress-bar');

// initialize flkty slider	
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

// reset slider to first image
resetButton.addEventListener('click', function() {
	flkty.select(0);
});

// progress bar under the slider
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});