var Dreddgame = Dreddgame || {};

Dreddgame.game = function(){};

Dreddgame.game.prototype = {
		preload: function() {
			this.game.time.advancedTiming = true;
		}
		create: function() {
			
			this.game.world.setBounds(0, 0, 3500, this.game.height);
			
			
			smallDesert = game.add.sprite(-100, 0, 'desert');smallDesert.scale.setTo(0.8,0.8);
	
			platforms = game.add.group();
			
			platforms.enableBody = true;
			

			
			var ground = platforms.create(0, game.world.height - 50, 'ground');
			
			ground.scale.setTo(0.8,0.8);
			
			ground.body.immovable = true;
			
			
			player = game.add.sprite(0, 400, 'cowboy');
			//player.frame = 0;
			
			
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
			
			
			cursors = game.input.keyboard.createCursorKeys();
			
			fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
			
			weapon = game.add.weapon(1, 'bullet');
			
			weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
			
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
			
		}
		
		update: function() {
			
			if(this.player.alive && !this.stopped) {
					
					if(!this.wrapping && this.player.x < this.game.width) {
						
						this.wraps++
						
						
						this.wrapping = true;
						
					}
					else if (this.player.x >= this.game.width) {
						this.wrapping = false;
					}
					
					
			this.game.world.wrap(this.player, -(this.game.width/2), false, true, false);
			
			
			game.physics.arcade.collide(player, platforms);
	
	//player.body.velocity.x = 0;
	



	
	if (cursors.left.isDown)
	{
		//left
		player.body.velocity.x = -100;
		
		player.animations.play('left');
		facingright = false;
		facingleft = true;
	}
	else if (cursors.right.isDown)
	{
		//right
		player.body.velocity.x = 100;
		
		player.animations.play('right');
		facingright = true;
		facingleft = false;
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
	
	
}

//function fire();
					
					
					
					
		}
		
		render: function()
			{
				
			}
};
				