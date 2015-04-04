var BidToCombat;
(function (BidToCombat) {
    var Game = (function () {
        function Game(display) {
            var _this = this;
            this.display = display;
            this.invalid = true;
            var gameloop = function () {
                _this.update();
                requestAnimationFrame(gameloop);
            };
            gameloop();
        }
        Game.prototype.update = function () {
            if (this.invalid) {
                this.draw();
            }
        };
        Game.prototype.draw = function () {
            this.renderer.draw(this.tiles);
            this.invalid = false;
        };
        return Game;
    })();
    BidToCombat.Game = Game;
})(BidToCombat || (BidToCombat = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BidToCombat;
(function (BidToCombat) {
    var Geom;
    (function (Geom) {
        var Point = (function () {
            function Point(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            Point.prototype.clone = function () {
                return new Point(this.x, this.y);
            };
            return Point;
        })();
        Geom.Point = Point;
        var Rectangle = (function (_super) {
            __extends(Rectangle, _super);
            function Rectangle(x, y, width, height) {
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                _super.call(this, x, y);
                this.width = width;
                this.height = height;
            }
            return Rectangle;
        })(Point);
        Geom.Rectangle = Rectangle;
    })(Geom = BidToCombat.Geom || (BidToCombat.Geom = {}));
})(BidToCombat || (BidToCombat = {}));
var BidToCombat;
(function (BidToCombat) {
    var Renderer;
    (function (Renderer) {
        var CanvasMapRenderer = (function () {
            function CanvasMapRenderer(canvas, tileRect) {
                this.canvas = canvas;
                this.tileRect = tileRect;
                this.target = this.canvas.getContext("2d");
            }
            CanvasMapRenderer.prototype.draw = function (tiles) {
            };
            CanvasMapRenderer.prototype.drawTile = function (column, row, currentTile) {
            };
            CanvasMapRenderer.prototype.clearMap = function () {
                this.canvas.width = this.canvas.width;
            };
            CanvasMapRenderer.prototype.tileColor = function (value) {
                return " "; // place holder
            };
            return CanvasMapRenderer;
        })();
        Renderer.CanvasMapRenderer = CanvasMapRenderer;
    })(Renderer = BidToCombat.Renderer || (BidToCombat.Renderer = {}));
})(BidToCombat || (BidToCombat = {}));
window.onload = function () {
    var canvas = document.getElementById('display');
    var bidToCombatTS = new BidToCombat.Game(canvas);
};
