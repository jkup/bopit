define(function (require) {

    'use strict';

    /**
    * Module dependencies
    */

    var defineComponent = require('flight/lib/component');

    /**
    * Module exports
    */

    return defineComponent(keyboard);

    /**
    * Module function
    */

    function keyboard() {
        this.register = function(keyCode) {
            switch(keyCode) {
                case 37:
                    this.trigger('buttonClicked', {
                        action: 'Twist it!'
                    });
                    break;
                case 40:
                    this.trigger('buttonClicked', {
                        action: 'Bop it!'
                    });
                    break;
                case 39:
                    this.trigger('buttonClicked', {
                        action: 'Pull it!'
                    });
                    break;
            }
        };

        this.after('initialize', function () {
            this.on('keydown', function(evt) {
                this.register(evt.keyCode);
            });
        });
    }

});
