class Scene1 extends Phaser.Scene {
  constructor() {
    super("openingScene");
  }
  preload() {
    this.load.image("player", "../assets/player.png");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }
  create() {
    this.player = this.physics.add.sprite(300, 300, "player");
  }
  update() {
    if (this.cursorKeys.right.isDown) {
      let tween = this.tweens.add({
        targets: this.player,
        x: this.player.x + 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.left.isDown) {
      let tween = this.tweens.add({
        targets: this.player,
        x: this.player.x - 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.up.isDown) {
      let tween = this.tweens.add({
        targets: this.player,
        y: this.player.y - 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.down.isDown) {
      let tween = this.tweens.add({
        targets: this.player,
        y: this.player.y + 32,
        duration: 100,
        repeat: 0,
      });
    }
  }
}

export default Scene1;
