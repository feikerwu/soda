import { Vector } from '../../dsl/src/vector';

export type Options = {
  width: number;
  height: number;
};

type Point = [Number, Number];
export type Context = CanvasRenderingContext2D;

export type BaseAttrs = {
  fillStyle: string;
  strokeStyle: string;
};

export type LineOptions = {
  points: Point[];
  lineWidth: number;
  lineCap: number;
} & BaseAttrs;
