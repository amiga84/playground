// game class
class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

// main game configuration
const configuration: GameConfig = {
    height: 786,
    parent: 'game',
    physics: {
        arcade: {
            gravity: { y: 200 },
        },
        default: 'arcade',
    },
    scene: [MainScene],
    type: Phaser.AUTO,
    width: 1024,
};

// when the page is loaded, create our game instance
window.onload = () => {
    const game = new Game(configuration);
};
