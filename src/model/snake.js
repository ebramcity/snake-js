import Piece from './piece.js';
export default class Snake {
    
    constructor(initialPoint, color, direction, blockWidth) {
        this.pieces = []
        this.pieces.push(new Piece(initialPoint, direction));
        this.blockWidth = blockWidth
        this.color = color;
    }

    getHeadPiece() {
        return this.pieces[this.pieces.length-1]
    }

    getTailPiece() {
        return this.pieces[0]
    }

    move() {
        this.getHeadPiece().add();
        this.getTailPiece().remove();
        if(this.getTailPiece().isEmpty()){
            let tail, others;
            ([tail , ...others] = this.pieces);
            this.pieces = others;
        }
    }

    turnTo(direction) {
        if(direction === this.getHeadPiece.direction){
            return;
        }
        const snakeHead = this.getHeadPiece().getHead();
        const newPoint = snakeHead.getNeighbor(direction);
        const newPiece = new Piece(newPoint, direction);
        this.pieces.push(newPiece);
        this.getTailPiece().remove();
    }

    getLength() {
        let l = 0;
        this.pieces.forEach((piece) => {
            piece.points.forEach((point) => {
                l++
            })
        })
        return l;
    }

    draw(context){
        context.fillStyle = this.color
        this.pieces.forEach((piece) => {
            piece.points.forEach((point) => {
                context.fillRect(point.x * this.blockWidth, point.y * this.blockWidth,
                                 this.blockWidth, this.blockWidth);
            })
        })
		
    }

}