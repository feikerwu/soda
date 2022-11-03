export class Vector {
  constructor(private x: number, private y: number) {}

  add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
  }

  subtract(v: Vector) {
    this.x -= v.x;
    this.y -= v.y;
  }

  distance(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
