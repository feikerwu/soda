import { Renderer, createRenderer } from '@gtea/renderer';
import canvas from 'canvas';

describe('renderer', () => {
  test('createRenderer should return renderer instance', () => {
    expect(createRenderer({ width: 100, height: 100 })).toBeInstanceOf(
      Renderer
    );
  });

  test('renderer context be instance of Canvas Context', () => {
    expect(
      createRenderer({ width: 100, height: 100 }).getContext()
    ).toBeInstanceOf(canvas.CanvasRenderingContext2D);
  });
});

describe('renderer methods', () => {
  let renderer: Renderer = createRenderer({ width: 100, height: 100 });

  test('line() should return rendeer itself', () => {
    expect(
      renderer.line({
        points: [[0, 0]],
      })
    ).toBe(renderer);
  });
});
