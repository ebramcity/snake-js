import Point from './point.js';

export default class Piece {
	
	constructor (initialPoint , direction) {
		this.points = [];
		this.points.push (initialPoint);
		this.direction = direction;
	}

	getHead() {
		return this.points[this.points.length-1]
	}

	getTail() {
		return this.points[0]
	}

	isEmpty() {
		return this.points.length == 0
	}

	add() {
		const head = this.getHead();
		let newPoint = head.getNeighbor(this.direction)
		this.points.push(newPoint);
	}

	remove() {
		let tail, others;
		([tail , ...others] = this.points);
		this.points = others;
	} 


}