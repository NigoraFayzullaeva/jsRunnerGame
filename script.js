/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}

function animate(){
    ctx,fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
}