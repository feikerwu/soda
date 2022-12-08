import type { Options, Context, LineOptions } from './render.type';
import { createContext } from './context';
import { line } from './shapes';

class Renderer {
  constructor(private context: Context) {}

  line(options: LineOptions) {
    return line(context, options);
  }
}

export function createRender(options: Options) {
  const context = createContext(options);
  return new Renderer(context);
}
