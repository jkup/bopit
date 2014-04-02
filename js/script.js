+function ($) {
  'use strict';

  $('#game').find('a').on('click', function(e) {
  	var $this = $(this);

  	e.preventDefault();

  	console.log($this.data('action'));
  });

}(jQuery);