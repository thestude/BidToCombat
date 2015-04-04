module BidToCombat {
	export class Game {
		invalid: boolean = true;
		renderer: Renderer.IMapRenderer;
		tiles: any[];
		constructor (public display: HTMLCanvasElement) {
			var gameloop = () => {this.update(); requestAnimationFrame(gameloop);}
			gameloop();
			}
		
		update():void {
			if (this.invalid) {
				this.draw();
				}
			}

		draw():void { 
			this.renderer.draw(this.tiles);
			this.invalid = false;
			}
		}
	} 

