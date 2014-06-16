'use strict';

requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        'component': '../js/component',
        'page': '../js/page'
    }
});

require(
    [
        'flight/lib/compose',
        'flight/lib/registry',
        'flight/lib/advice',
        'flight/lib/logger',
        'flight/lib/debug',
        '../js/lib/countdown'
    ],

    function(compose, registry, advice, withLogging, debug) {
        debug.enable(false);
        compose.mixin(registry, [advice.withAdvice]);

        require(['page/default'], function(initializeDefault) {
            initializeDefault();
        });
    }
);