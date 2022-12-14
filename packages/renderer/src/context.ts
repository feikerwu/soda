import type { Options } from './render.type';
import { isNull } from '@gtea/utils';

export function createContext({ width, height }: Options) {
  return createCanvasContext(width, height);
}

export function createCanvasContext(
  width: number,
  height: number
): CanvasRenderingContext2D {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  if (isNull(context)) {
    throw new Error(`Get Canvas Context Failed`);
  }

  return context;
}
