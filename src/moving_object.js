export default class MovingObject {
    constructor(options) {
      this.pos = options.pos;
      this.vel = options.vel;
      this.radius = options.radius;
      this.color = options.color;
      this.game = options.game;
      this.isWrappable = true;
    }
}
