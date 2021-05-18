import 'phaser';

export default class StarScene extends Phaser.Scene {
  bg: Phaser.GameObjects.Image;
  platform: Phaser.Physics.Arcade.StaticGroup;
  // star: ;
  
  constructor() {
    super('StarScene');
  }

  preload(): void {
    this.load.image('sky', './assets/sky.png');
    // this.load.image('ground', require('./../assets/platform.png'));
    // this.load.image('star', require('./../assets/star.png'));
    // this.load.image('bomb', require('./../assets/bomb.png'));
    // this.load.spritesheet('dude', 
    //   require('./../assets/dude.png'),
    //   { frameWidth: 32, frameHeight: 48 }
    // );
  }

  create(): void {
    this.bg = this.add.image(0, 0, 'sky');

    // this.platform = this.physics.add.staticGroup();

    // this.platform.create(400, 568, 'ground');

    // this.platform.create(600, 400, 'ground');
    // this.platform.create(50, 250, 'ground');
    // this.platform.create(750, 220, 'ground');

    // const player = this.add.sprite()
    // const star = 
  }
}