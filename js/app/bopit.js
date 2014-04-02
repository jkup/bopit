var Bopit = {
	counter: 0,
	speed: 0,
	option: 1,
	action: '',
	$counter: $('#counter'),
	$action: $('#action'),

	advance: function() {
		// generate random number
		option = this.random();

		// set current action based of rand number
		this.action = this.actions[option];
		this.$action.html(this.action);

		this.increment();
	},
	increment: function() {
		this.counter++;
		this.$counter.html(this.counter);
	},
	random: function() {
		return Math.floor((Math.random() * 3) + 1);
	},
	restart: function() {
		this.counter = 0;
		this.$counter.html(this.counter);

		console.log('You lose');

		this.advance();
	},
	actions: {
		1: 'Bop it!',
		2: 'Twist it!',
		3: 'Pull it!'
	}

};