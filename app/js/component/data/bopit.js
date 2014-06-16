define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(bopIt);

    function bopIt() {
        //default attributes
        this.defaultAttrs({
            counter: '#counter',
            action: '#action',
            message: '#message',
            currentAction: '',
            currentCount: 0,
            option: 1,
            speed: 0
        });

        this.advance = function() {
            this.trigger('restartCount');

            // generate random number
            option = this.random();

            // set current action based of rand number
            this.attr.currentAction = this.actions[option];
            $(this.attr.action).html(this.attr.currentAction);

            this.increment();
        };

        this.decide = function(action) {
            this.strobe();

            if(action === this.attr.currentAction) {
                this.advance();
            } else {
                this.loss();
            }
        };

        this.increment = function() {
            this.attr.currentCount++;
            $(counter).html(this.attr.currentCount);
        };

        this.random = function() {
            return Math.floor((Math.random() * 3) + 1);
        };

        this.strobe = function() {
            $('body').fadeOut(100).delay(25).fadeIn(100);
        };

        this.loss = function() {
            this.trigger('endCount');
            this.attr.currentAction = '';
            $(this.attr.action).html('');
            $(this.attr.counter).css({'background-color': '#c0392b', 'color': '#FFFFFF'});
            $('#message').show();
        };

        this.restart = function() {
            $('#message').hide();

            this.attr.currentCount = 0;
            $(counter).html(this.attr.currentCount);

            this.advance();
        };

        this.actions = {
            1: 'Bop it!',
            2: 'Twist it!',
            3: 'Pull it!'
        }

        //initialize
        this.after('initialize', function() {
            this.advance();

            this.on(document, 'bopitLoss', this.loss);
            this.on(document, 'bopitAdvance', this.advance);
            this.on(document, 'bopitRestart', this.restart);
            this.on(document, 'buttonClicked', function(ev, data) {
                this.decide(data.action);
            });
        });
    };
});
