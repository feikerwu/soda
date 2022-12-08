import { LineOptions, Context } from './render.type';

function applyAttrs(ctx: Context, attrs: Record<string, any>) {
  for (let [key, value] of Object.entries(attrs)) {
    // @ts-ignore
    ctx[key] = value;
  }

  return ctx;
}

// 绘制一条线
export function line(
  ctx: CanvasRenderingContext2D,
  { points, ...attrs }: LineOptions
) {
  const [start, ...restPoints] = points;

  applyAttrs(ctx, attrs);

  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);

  for (let [x, y] of restPoints) {
    ctx.lineTo(x, y);
  }

  ctx.closePath();

  ctx.stroke();
}
