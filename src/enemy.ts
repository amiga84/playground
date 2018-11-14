class Enemy extends Phaser.GameObjects.Sprite {

    private configuration: GameConfig;
    private keyLeft;
    private direction: number = 2;

    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        this.configuration = config.configuration;
        this.createAnimations(config.scene, config.key);
        this.play('run');

        config.scene.add.existing(this);
    }

    public update(keys, time, delta): void {
        if (keys.left.isDown) {
            this.x += -2;
            this.flipX = true;
        }
        if (keys.right.isDown) {
            this.x += 2;
            this.flipX = false;
        }
        if (keys.down.isDown) {
            this.y += 2;
        }
        if (keys.jump.isDown) {
            this.y += -2;
        }
        if (this.x > Number(configuration.width) + 10) {
            this.direction = -3;
            this.flipX = true;
        }
        if (this.x < -10) {
            this.direction = 3;
            this.flipX = false;
        }
    }

    private createAnimations(scene: Phaser.Scene, key: string): void {
        scene.anims.create({
            frameRate: 20,
            frames: scene.anims.generateFrameNumbers(key, {}),
            key: 'run',
            repeat: -1,
        });
    }

}
