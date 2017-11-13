var playState = {

	create: function () {
	
	this.game.world.setBounds(0, 0, 3500, this.game.height);
	
	map = game.add.tilemap('tilemap');
	
	

	
	map.addTilesetImage('tileset1', 'tileset');
	
	backLayer = map.createLayer('Tile Layer 1');
	collideLayer = map.createLayer('Tile Layer 2');
	grassLayer = map.createLayer('Tile Layer 3');
	
	
	backLayer.resizeWorld();
		
	map.setLayer(collideLayer);
	
	map.setCollisionBetween(1, 600);
	
	platforms = game.add.group();
	
	platforms.enableBody = true;

	
	
	player = game.add.sprite(200, 400, 'cowboy');
	//player.scale.setTo(0.5, 0.5);
	
	
	game.physics.arcade.enable(player);
	
	player.enableBody = true;
	
	player.body.bounce.y = 0.1;
	player.body.gravity.y = 300;
	
	player.body.collideWorldBounds = true;
	
	player.animations.add('right', [1, 2, 3, 4, 5, 6, 7, 8, 9,], 10, true);
	player.animations.add('left', [15, 16, 17, 18, 19, 20, 21, 22, 23, 24,], 10, true);
	player.animations.add('stopright', [0], 1, true);
	player.animations.add('stopleft', [14], 1, true);
	player.animations.add('fireright', [11, 12, 13], 10, true);
	player.animations.add('fireleft', [25, 26, 27], 10, true);
	
	
	santa = game.add.sprite(2400, 300, 'santa');
	santa.scale.setTo(0.2, 0.2);
	
	game.physics.arcade.enable(santa);
	
	santa.enableBody = true;
	
	santa.body.bounce.y = 0.2;
	santa.body.gravity.y = 300;
	
	santa.body.collideWorldBounds = true;
	
	
	cursors = game.input.keyboard.createCursorKeys();
	
	fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
	
	weapon = game.add.weapon(50, 'bullet');
	
	game.physics.arcade.enable(weapon);
	
	weapon.enableBody = true;
	
	weapon.bulletKillType = Phaser.Weapon.CAMERA_BOUNDS;
	
	weapon.fireRate = 100;
	
	weapon.trackSprite(player, 100, 75, false);
	
	//var left = new Phaser.Point(game.player.position.x - 10, game.position.y -20);
	
	//var right = new Phaser.Point(game.player.position.x + 10, game.position.y - 20);
	
	if (facingright = true)
	{
	
		weapon.fireAngle = Phaser.ANGLE_RIGHT
		
	}
	else
	{
	
		weapon.fireAngle = Phaser.ANGLE_LEFT
		
	}
	
	this.game.camera.follow(player);
	this.game.camera.focusOnXY(0, player.position.y);
	//Phaser.Rectangle = (800, 600);
	
	this.game.physics.arcade.TILE_BIAS = 40;
	
	},
	
	

	update: function () {
	
		
		
		game.physics.arcade.collide(player, collideLayer);
		game.physics.arcade.collide(santa, collideLayer);
		game.physics.arcade.overlap(weapon, santa, this.killEnemy, null, this);
		
		//map.setCollisionBetween(1, 1000, true, 'Tile Layer 2');
	
	//player.body.velocity.x = 0;
	



	
	if (cursors.left.isDown)
	{
		//left
		player.body.velocity.x = -2000;
		
		player.animations.play('left');
		facingright = false;
		facingleft = true;
	}
	else if (cursors.right.isDown)
	{
		//right
		player.body.velocity.x = 2000;
		
		player.animations.play('right');
		facingright = true;
		facingleft = false;
	}
	else if (cursors.up.isDown)
	{
		
			player.body.velocity.y = -1000;
			
	}
	else
	{
		//facingleft = true;
		player.body.velocity.x = 0;
		player.animations.stop();
		if ((facingright = true))
		{ 
			//stop
			player.frame = 0;
			facingright = true;
		
		}
		else if ((facingleft = true))
		{
	
			player.frame = 14;
			facingleft = true;
		
		
		}
		
	}
	
	
	
	
	if (fireButton.isDown && cursors.right.isDown)
	{
		
		
		//weapon.fire(right);
		//game.weapon.fireAngle = 90;
		
		player.animations.play('fireright');
	
	}
	else if (fireButton.isDown && cursors.left.isDown)
	{
		
		//game.weapon.fireAngle = -90;
		//weapon.fire(left);
		
		player.animations.play('fireleft');
		
	}
	else if (fireButton.isDown)
	{
	
		weapon.fire();
		
	}
	
	/*if(!this.stopped) {
		player.body.velocity.x = 300;
		
		if(!this.wrapping && player.position.x < this.game.width) {
			
			this.wraps++;
			
			this.wrapping = true;
			
		}
		else if(player.position.x >= this.game.width) {
			this.wrapping = false;
		}
	}
	this.game.world.wrap(this.player, -(this.game.width/2), false, true, false);
	
	*/

	
},

	render: function() {
		
			this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
			game.debug.cameraInfo(game.camera, 500, 32);
	},
	
	killEnemy: function(weapon, santa) {
		
			santa.kill();
			bullet.kill();
	
	},
	
	//fireBullet() {
	
	
}

	
		