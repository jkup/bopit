+function ($) {
  'use strict';

  $(document).ready(function() {
  	Bopit.advance();
  });

  $('#game').find('button').on('click', function() {
  	var $this = $(this);
  	console.log($this.data('action'));

  	if ($this.data('action') === Bopit.action) {
  		Bopit.advance();
  	} else {
  		Bopit.restart();
  	}
  });

}(jQuery);