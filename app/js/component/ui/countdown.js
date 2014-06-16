define(function (require) {

    'use strict';

    /**
    * Module dependencies
    */

    var defineComponent = require('flight/lib/component');

    /**
    * Module exports
    */

    return defineComponent(countdown);

    /**
    * Module function
    */

    function countdown() {
        this.countdown = function() {
            var that = this;
            this.$node.countdown({
                date: +(new Date) + 3000,
                onEnd: function() {
                    that.trigger('bopitLoss');
                },
                render: function(data) {
                    $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
                },
            });
        };

        this.restart = function() {
            $('#countdown').removeClass('ended').data('countdown').update(+(new Date) + 3000).start();
        };

        this.end = function() {
            $('#countdown').data('countdown').stop();
        };

        this.after('initialize', function () {
            this.countdown();

            this.on(document, 'restartCount', this.restart);
            this.on(document, 'endCount', this.end);
        });
    }

});
