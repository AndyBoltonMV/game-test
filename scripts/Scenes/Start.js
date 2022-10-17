class Start extends Phaser.Scene {
  constructor() {
    super("startingScene");
  }
  preload() {
    this.load.image("player", "assets/player.png");
    this.cursorKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    });
  }
  create() {
    this.player = this.physics.add.sprite(300, 300, "player");
  }
  update() {
    if (this.cursorKeys.right.isDown) {
      this.tweens.add({
        targets: this.player,
        x: this.player.x + 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.left.isDown) {
      this.tweens.add({
        targets: this.player,
        x: this.player.x - 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.up.isDown) {
      this.tweens.add({
        targets: this.player,
        y: this.player.y - 32,
        duration: 100,
        repeat: 0,
      });
    } else if (this.cursorKeys.down.isDown) {
      this.tweens.add({
        targets: this.player,
        y: this.player.y + 32,
        duration: 100,
        repeat: 0,
      });
    }
  }
}

export default Start;
