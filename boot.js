var Dreddgame = Scroll || {};

Dreddgame.Boot = function(){};


Dreddgame.Boot.prototype = {
	preload: function() {
	
		this.load.image('loading', 'img/loading.png');
		
		}
		
	create: function() {
		
		this.game.stage.backgroundColor = '#000000';
		
		
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.state.start('Preload');
		
	}
};