import Point from './point';
import directions from './directions'

const p1 = new Point(10, 10);

it('should get UP neighbor', () => {
    expect(p1.getNeighbor(directions.UP)).toEqual(new Point(10, 9));
})
it('should get DOWN neighbor', () => {
    expect(p1.getNeighbor(directions.DOWN)).toEqual(new Point(10, 11));
})
it('should get LEF neighbor', () => {
    expect(p1.getNeighbor(directions.LEFT)).toEqual(new Point(9, 10));
})
it('should get RIGHT neighbor', () => {
    expect(p1.getNeighbor(directions.RIGHT)).toEqual(new Point(11, 10));
})

it('should check limit cases for neighborhood');