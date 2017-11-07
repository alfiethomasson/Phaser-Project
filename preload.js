var Dreddgame = Dreddgame || {};


Dreddgame.Preload = function(){};
	preload: function() {
		
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
		this.preloadBar.anchor.setTo(0.5);
		
		
		this.load.setPreloadSprite(this.preloadBar);
		
		
		game.load.image('desert', 'img/sandBG.png');
		game.load.spritesheet('cowboy', 'img/cowboy.png', 128, 130, 140);
		game.load.image('platform1', 'img/platform1.png');
		game.load.image('ground', 'img/ground_sand.png');
		game.load.image('bullet', 'img/bullet.png');
		game.load.spritesheet('statue', 'img/statue.png', 65, 65);
		game.load.image('loading', 'img/loading.png');
		game.load.image('preloadbackground', 'img/vortex.png');
		
	}
	create:function() {
		this.state.start('Game');
	}
}