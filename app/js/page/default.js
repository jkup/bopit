define(function (require) {

    'use strict';

    /**
    * Module dependencies
    */

    var BopIt = require('component/data/bopit');
    var Buttons = require('component/ui/button');
    var Countdown = require('component/ui/countdown');
    var StartOver = require('component/ui/StartOver');
    var Keyboard = require('component/ui/Keyboard');

    /**
    * Module exports
    */

    return initialize;

    /**
    * Module function
    */

    function initialize() {
        BopIt.attachTo(document);
        Keyboard.attachTo(document);
        Buttons.attachTo('.buttons');
        Countdown.attachTo('#countdown');
        StartOver.attachTo('#start-over');
    }

});
