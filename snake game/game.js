import {update as updateSnake,draw as drawSnake,SNAKE_SPEED} from './snake.js';
import{update as upDateFood,draw as drawFood} from './food.js'
import {outsideGrid} from './gridPosition.js'
import {getsnakeHead, snakeIntersection} from './snake.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');


let gameOver = false;
function main(currentTime){
    if(gameOver){
    if(confirm('You lost!, press ok to retart.')){

        window.location ='/';
    }
       
    return
    }
    


    window.requestAnimationFrame(main);
    const SecondSinceLastRender = (currentTime - lastRenderTime) / 1000; 
    if(SecondSinceLastRender < 1/SNAKE_SPEED) return;
lastRenderTime = currentTime;
update()
draw()

}

window.requestAnimationFrame(main);
function update(){
updateSnake()
upDateFood()
checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getsnakeHead()) || snakeIntersection();
}
