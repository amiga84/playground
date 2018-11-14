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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(config) {
        var _this = _super.call(this, config.scene, config.x, config.y, config.key) || this;
        _this.direction = 2;
        _this.configuration = config.configuration;
        _this.createAnimations(config.scene, config.key);
        _this.play('run');
        config.scene.add.existing(_this);
        return _this;
    }
    Enemy.prototype.update = function (keys, time, delta) {
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
    };
    Enemy.prototype.createAnimations = function (scene, key) {
        scene.anims.create({
            frameRate: 20,
            frames: scene.anims.generateFrameNumbers(key, {}),
            key: 'run',
            repeat: -1,
        });
    };
    return Enemy;
}(Phaser.GameObjects.Sprite));
//# sourceMappingURL=enemy.js.map