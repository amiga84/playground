var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(config) {
        var _this = _super.call(this, config.scene, config.x, config.y, config.key) || this;
        _this.createAnimations(config.scene, config.key);
        _this.scene.physics.world.enable(_this);
        _this.gunX = config.x;
        _this.gunY = config.y;
        _this.bullet = _this.scene.physics.add.sprite(_this.gunX, _this.gunY, config.key).setScale(0.5);
        _this.bullet.disableBody(true, true);
        _this.velocityFromRotation = _this.scene.physics.velocityFromRotation;
        return _this;
    }
    Bullet.prototype.fire = function () {
        this.bullet.enableBody(true, this.gunX, this.gunY, true, true);
        this.bullet.setVelocityY(-400);
        this.bullet.setScale(0.5);
        this.bullet.setScale(1);
    };
    Bullet.prototype.update = function (keys, time, delta) {
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
    };
    Bullet.prototype.createAnimations = function (scene, key) {
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
    };
    return Bullet;
}(Phaser.GameObjects.Sprite));
//# sourceMappingURL=bullet.js.map