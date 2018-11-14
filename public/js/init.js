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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(config) {
        return _super.call(this, config) || this;
    }
    return Game;
}(Phaser.Game));
var configuration = {
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
window.onload = function () {
    var game = new Game(configuration);
};
//# sourceMappingURL=init.js.map