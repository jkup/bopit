var Bopit = {
	$counter: $('#counter'),
	$action: $('#action'),
	$message: $('#message'),
	action: '',
	counter: 0,
	option: 1,
	speed: 0,

	advance: function() {
		this.$message.html('');

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
	loss: function() {
		this.$action.html('');
		this.$counter.css({'background-color': '#c0392b', 'color': '#FFFFFF'});
		this.$message.html('You lose<br /><button id="start-over" class="btn btn-success">Start Over</button>');
	},
	restart: function() {
		this.counter = 0;
		this.$counter.html(this.counter);

		this.advance();
	},
	actions: {
		1: 'Bop it!',
		2: 'Twist it!',
		3: 'Pull it!'
	}

};