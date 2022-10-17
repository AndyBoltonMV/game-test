class Title extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }
  preload() {
    this.load.image("multiverse", "assets/multiverse.gif");
  }
  create() {
    const logo = this.add.image(0, 0, "multiverse");
    logo.setOrigin(0, 0);
    this.add.text(300, 300, "Game Title");
    this.cursorKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
    });
  }
  update() {
    if (this.cursorKeys.enter.isDown) {
      this.scene.start("loadingScene");
    }
  }
}

export default Title;
