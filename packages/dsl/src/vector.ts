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

  rotate(rad: number) {
    const c = Math.cos(rad),
      s = Math.sin(rad);

    const { x, y } = this;
    this.x = x * c + y * -s;
    this.y = x * s + y * c;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  scale(scale: number) {
    this.x = this.x * scale;
    this.y = this.y * scale;
  }
}
