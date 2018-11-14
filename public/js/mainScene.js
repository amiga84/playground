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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this, {
            key: 'MainScene',
        }) || this;
    }
    MainScene.prototype.preload = function () {
        this.load.image('backgroundImg', './assets/background.png');
        this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', {
            endFrame: 17,
            frameHeight: 45,
            frameWidth: 37,
        });
        this.load.image('bullet', 'assets/geschenk.png');
    };
    MainScene.prototype.create = function () {
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
    };
    MainScene.prototype.update = function (time, delta) {
        if (this.keyA.isDown) {
            this.background.x -= 1;
        }
        this.bullet.update(this.keys, time, delta);
        this.enemy.update(this.keys, time, delta);
    };
    return MainScene;
}(Phaser.Scene));
//# sourceMappingURL=mainScene.js.map