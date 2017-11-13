var loadState = {


	
	preload: function() {
		
		var loadingLabel = game.add.text(80, 50, 'loading...',
										{font: '30px Courier', fill: '#ffffff'});
									
		game.load.image('menu', 'img/loadingscreen.png');
		game.load.image('desert', 'img/sandBG.png');
		game.load.spritesheet('cowboy', 'img/cowboy.png', 128, 130, 140);
		game.load.image('platform1', 'img/platform1.png');
		game.load.image('ground', 'img/ground_sand.png');
		game.load.image('bullet', 'img/bullet.png');
		game.load.spritesheet('statue', 'img/statue.png', 65, 65);
		game.load.image('loading', 'img/loading.png');
		game.load.image('preloadbackground', 'img/vortex.png');
		game.load.image('juan', 'img/juan.png');
		game.load.tilemap('tilemap', 'tiledtest/map1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tileset', 'tiledtest/terrain.png');
		game.load.spritesheet('santa', 'img/santa.png');
		
		
	},
	
	

	create: function() {
	
		game.state.start('menu');
		
	}
};