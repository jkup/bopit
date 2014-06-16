define(function (require) {

    'use strict';

    /**
    * Module dependencies
    */

    var defineComponent = require('flight/lib/component');

    /**
    * Module exports
    */

    return defineComponent(button);

    /**
    * Module function
    */

    function button() {
        this.process = function() {
            this.trigger('buttonClicked', {
                action: this.$node.data('action')
            });
        };
    
        this.after('initialize', function () {
            this.on('click', this.process);
        });
    };

});
