import Phaser from "phaser";
import Title from "./Scenes/Title";
import Scene1 from "./Scenes/Scene1";

const config = {
  type: Phaser.auto,
  width: 600,
  height: 600,
  scene: [Title, Scene1],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);
