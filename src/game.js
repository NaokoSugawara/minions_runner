
// import drawMinion from './minion';

export default class MinionRunner {
    constructor(canvas) {
        const ctx = canvas.getContext("2d");
        
        // square
        ctx.fillStyle = "yellow";
        ctx.fillRect(20, 20, 50, 50);

        // line 
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.lineTo(600, 400);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();

        
    }
}

