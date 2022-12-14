import type { Options, Context, LineOptions } from './render.type';
import { createContext } from './context';
import { line } from './shapes';

export class Renderer {
  constructor(private context: Context) {}

  line(options: LineOptions) {
    line(this.context, options);

    return this;
  }

  getContext() {
    return this.context;
  }
}

export function createRenderer(options: Options) {
  const context = createContext(options);
  return new Renderer(context);
}
