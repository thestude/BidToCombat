module BidToCombat.Renderer {
	
	export interface IMapRenderer {
		draw(tiles: any[]):void;
		drawTile(column: number, row: number, currentTile: string):void;
		clearMap():void;
		}
	
	export class CanvasMapRenderer implements IMapRenderer{
		target: CanvasRenderingContext2D; 
		constructor (private canvas: HTMLCanvasElement, private tileRect: Geom.Rectangle) {
			this.target = this.canvas.getContext("2d");
		}
		
		public draw(tiles: any[]):void {
		}
		public drawTile(column: number, row: number, currentTile: string):void {
		}
		
		clearMap():void {
			this.canvas.width = this.canvas.width;
		}

		private tileColor(value: string): string {
			return " "; // place holder
		}
	}
}
