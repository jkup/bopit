define(function (require) {

    'use strict';

    /**
     * Module dependencies
     */

    var defineComponent = require('flight/lib/component');

    /**
     * Module exports
     */

    return defineComponent(startOver);

    /**
     * Module function
     */

    function startOver() {
        this.restart = function() {
            this.trigger('bopitRestart');
        };

        this.after('initialize', function () {
            this.on('click', this.restart)
        });
    }

});
