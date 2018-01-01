import Screen from './screen';
import Snake from './model/snake'
import Point from './model/point'
import directions from './model/directions'
import Bacon from 'baconjs'

const canvas = document.getElementById("game");
console.log(canvas)
const context = canvas.getContext("2d");
const BLOCK_COUNT = 40
const SCREEN_SIZE = 400

const screen = new Screen(canvas, SCREEN_SIZE, BLOCK_COUNT);
const snake1 = new Snake(new Point(0,0), "yellow", directions.RIGHT, SCREEN_SIZE / BLOCK_COUNT);

let elapsedTime = 0;
let lastTime = 0;
const resolution = 200;


const keyStream = Bacon.fromEvent(document, 'keyup');
const isKeyCode = (keyCode) => {
    return (event) => {
        return event.keyCode===keyCode
    }
}

const rightKey = keyStream.filter(isKeyCode(39)).map("RIGHT")
const leftKey = keyStream.filter(isKeyCode(37)).map("LEFT")
const upKey = keyStream.filter(isKeyCode(38)).map("UP")
const downKey = keyStream.filter(isKeyCode(40)).map("DOWN")
rightKey
    .merge(leftKey)
    .merge(upKey)
    .merge(downKey)
    .onValue((direction)=>
    {
        console.log("Turning snake to direction "+ direction)
        snake1.turnTo(directions[direction])
    }
)


function draw(time) {
    const timeDiff = time - lastTime;
    elapsedTime += timeDiff
    lastTime = time
    if(elapsedTime >= resolution) {
        elapsedTime = 0;
        screen.draw(context);
        snake1.draw(context);
        snake1.move();
        console.log(snake1.getLength())
    } 
    requestAnimationFrame((time)=>{
        draw(time);
    })

    
}

draw(0);



