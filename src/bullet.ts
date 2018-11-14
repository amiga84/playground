class Bullet extends Phaser.GameObjects.Sprite {

    private bullet: Phaser.Physics.Arcade.Sprite;
    private gunX: number;
    private gunY: number;
    private velocityFromRotation: any;

    constructor(config) {
        super(config.scene, config.x, config.y, config.key);

        this.createAnimations(config.scene, config.key);
        this.scene.physics.world.enable(this);

        this.gunX = config.x;
        this.gunY = config.y;

        this.bullet = this.scene.physics.add.sprite(this.gunX, this.gunY, config.key).setScale(0.5);
        this.bullet.disableBody(true, true);

        this.velocityFromRotation = this.scene.physics.velocityFromRotation;
    }

    public fire() {
        this.bullet.enableBody(true, this.gunX, this.gunY, true, true);
        this.bullet.setVelocityY(-400);
        this.bullet.setScale(0.5);
        this.bullet.setScale(1);
    }

    public update(keys, time, delta) {
        if (keys.fire.isDown) {
            this.fire();
        }
        if (keys.left.isDown) {
            this.bullet.x = this.bullet.x - 10;
        }
        if (keys.right.isDown) {
            this.bullet.x = this.bullet.x + 10;
        }

        this.bullet.setScale(this.bullet.scaleY - 0.003);
        if (this.bullet.scaleY <= 0.1) {
            this.bullet.setScale(0.1);
        }
    }

    private createAnimations(scene: Phaser.Scene, key: string): void {
        scene.anims.create({
            frameRate: 10,
            frames: scene.anims.generateFrameNumbers(key, {
                end: 4,
                start: 1,
            }),
            key: 'bulletFly',
            repeat: -1,
            repeatDelay: 0,
        });
    }

}
