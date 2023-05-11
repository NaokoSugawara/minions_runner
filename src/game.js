
// import drawMinion from './minion';

export default class MinionRunner {
    constructor(canvas) {
        const ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "yellow";
        ctx.fillRect(20, 20, 50, 50);


        // test ( draw line )------------------
        // ctx.beginPath();
        // ctx.moveTo(0, 400);
        // ctx.lineTo(600, 400);
        // ctx.lineWidth = 5;
        // ctx.strokeStyle = "white";
        // ctx.stroke();

        // test -------------------------------
        // Set line width
        // ctx.lineWidth = 10;

        // Wall
        // ctx.strokeRect(75, 140, 150, 110);

        // // Door
        // ctx.fillRect(130, 190, 40, 60);

        // // Roof
        // ctx.beginPath();
        // ctx.moveTo(50, 140);
        // ctx.lineTo(150, 60);
        // ctx.lineTo(250, 140);
        // ctx.closePath();
        // ctx.stroke();
        // test -------------------------------
        
    }
}