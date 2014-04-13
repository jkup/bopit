+function ($) {
  'use strict';

  $(document).ready(function() {
  	Bopit.advance();

    $('#countdown').countdown({
        date: +(new Date) + 2000,
        onEnd: function() {
          Bopit.loss();
        },
        render: function(data) {
          $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
        },
    });

  });

  $('#game').find('button').on('click', function() {
  	var $this = $(this);

  	if ($this.data('action') === Bopit.action) {
      $('#countdown').removeClass('ended').data('countdown').update(+(new Date) + 2000).start();
  		Bopit.advance();
  	} else {
      $('#countdown').data('countdown').stop();
  		Bopit.loss();
  	}
  });

  $('body').on('click', '#start-over', function() {
    $('#countdown').removeClass('ended').data('countdown').update(+(new Date) + 2000).start();

    Bopit.restart();
  });

}(jQuery);