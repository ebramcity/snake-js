import directions from '../model/directions.js'

export default class Point {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}

	getNeighbor(direction) {
		let newX = this.x
		let newY = this.y; 
		if (direction === directions.UP){
			newY--;
		} else if (direction === directions.DOWN){
			newY++;
		} else if (direction === directions.LEFT){
			newX--;
		} else if (direction === directions.RIGHT){
			newX++;
		} 
		return new Point(newX, newY);
	}
}