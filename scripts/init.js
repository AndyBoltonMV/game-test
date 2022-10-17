import Phaser from "phaser";
import Title from "./Scenes/Title";
import Loading from "./Scenes/Loading";
import Start from "./Scenes/Start";

const config = {
  type: Phaser.auto,
  width: 1024,
  height: 768,
  scene: [Title, Loading, Start],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);
