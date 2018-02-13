import Piece from '../model/piece.js';
import Point from '../model/point.js';
import directions from '../model/directions.js'

it('should add a point to the piece > UP direction', () => {
	const p1 = new Piece(new Point(10, 10), directions.UP);
	p1.add();
	expect(p1.points).toHaveLength(2);
	expect(p1.getHead()).toEqual(new Point(10,9));
});

it('should add a point to the piece > DOWN direction', () => {
	const p1 = new Piece(new Point(10, 10), directions.DOWN);
	p1.add();
	expect(p1.getHead()).toEqual(new Point(10,11));
});

it('should add a point to the piece > LEFT direction', () => {
	const p1 = new Piece(new Point(10, 10), directions.LEFT);
	p1.add();
	expect(p1.getHead()).toEqual(new Point(9,10));
});

it('should add a point to the piece > RIGHT direction', () => {
	const p1 = new Piece(new Point(10, 10), directions.RIGHT);
	p1.add();
	expect(p1.getHead()).toEqual(new Point(11,10));
});


it('should remove tail point from piece if calling remove()' , () => {
	const p1 = new Piece(new Point(10, 10), directions.RIGHT);
	p1.add(); //must be [10,10] , [11,10]
	p1.add(); //must be [10,10] , [11,10], [12,10]
	p1.remove(); //must be [11,10], [12,10]
	expect(p1.getTail()).toEqual(new Point(11,10));
	p1.remove(); //must be [12,10]
	expect(p1.getTail()).toEqual(new Point(12,10));
	p1.remove(); //must be empty array
	expect(p1.points).toHaveLength(0)

});