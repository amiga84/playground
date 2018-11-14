class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;
    private keyA: any;
    private background: Phaser.GameObjects.Image;
    private sprite1: Phaser.GameObjects.Sprite;
    private enemy: Enemy;
    private bullet: Bullet;
    private keys;

    constructor() {
        super({
            key: 'MainScene',
        });
    }

    public preload(): void {
        this.load.image('backgroundImg', './assets/background.png');
        this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', {
            endFrame: 17,
            frameHeight: 45,
            frameWidth: 37,
        });
        this.load.image('bullet', 'assets/geschenk.png');
    }

    public create(): void {
        this.background = this.add.image(600, 350, 'backgroundImg');

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.enemy = new Enemy({
            configuration: this.sys.game.config,
            key: 'mummy',
            scene: this,
            x: 10,
            y: 600,
        });

        this.bullet = new Bullet({
            configuration: this.sys.game.config,
            key: 'bullet',
            scene: this,
            x: 420,
            y: 700,
        });

        this.keys = {
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            fire: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
        };
    }

    public update(time, delta): void {
        if (this.keyA.isDown) {
            this.background.x -= 1;
        }

        this.bullet.update(this.keys, time, delta);
        this.enemy.update(this.keys, time, delta);
    }

}
