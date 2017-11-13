var menuState = {

	create: function () {
	
	
		menu = game.add.sprite(0, 0, 'menu');
										
										
		var qkey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
		
		var j = game.input.keyboard.addKey(Phaser.Keyboard.J);
		
		qkey.onDown.addOnce(this.start, this);
		
		j.onDown.addOnce(this.juan, this);
		
		
	},
	
	juan: function() {
		
		var qkey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
		egg = game.add.sprite(0, 0, 'juan');
		
		qkey.onDown.addOnce(this.start, this);
	
	},
	
	start: function () {
		game.state.start('play');
		
	},
	
};