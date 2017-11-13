

var bootState = {

	create: function () {
		
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			
			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;
		
			game.physics.startSystem(Phaser.Physics.ARCADE);
			
			game.state.start('load');
	}
}
		
	