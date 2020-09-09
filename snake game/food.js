import {onSnake,expandSnake} from './snake.js'
import {randomGridPosition} from './gridPosition.js'
let food =  randomGridPosition();
const EXPANSION_RATE = 5;


export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food =  randomGridPosition();
    }
    
}


export function draw(gameBoard){
   
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function randomFoodPositions(){
    let newFoodPosition;
    while(newFoodPosition === null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}



