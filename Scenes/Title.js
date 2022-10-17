class Title extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }
  preload() {}
  create() {
    this.add.text(300, 300, "Game Title");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.cursorKeys.shift.isDown) {
      this.scene.start("openingScene");
    }
  }
}

export default Title;
