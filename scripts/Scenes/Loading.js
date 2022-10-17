class Loading extends Phaser.Scene {
  constructor() {
    super("loadingScene");
  }
  preload() {}
  create() {
    this.loading = this.add.text(0, 0, "Loading...");
    this.time.addEvent({
      delay: 1000,
      loop: false,
      callback: () => {
        this.scene.start("startingScene");
      },
    });
  }
  update() {}
}

export default Loading;
