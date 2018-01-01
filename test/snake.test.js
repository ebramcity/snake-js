import Snake from '../model/snake.js';
import Point from '../model/point.js';
import Piece from '../model/piece.js';
import directions from '../model/directions.js'

const initialPoint = new Point(10, 10)
const snake = new Snake(initialPoint, "red", directions.RIGHT, 10);

it('should have one piece after initiating', () => {
    expect(snake.pieces).toHaveLength(1)
    expect(snake.pieces[0]).toEqual(new Piece(initialPoint, directions.RIGHT));
})

it('should return head piece', () => {
    expect(snake.getHeadPiece()).toEqual(new Piece(initialPoint, directions.RIGHT));
})

it('should return tail piece', () => {
    expect(snake.getTailPiece()).toEqual(new Piece(initialPoint, directions.RIGHT));
})