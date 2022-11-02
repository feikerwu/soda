interface LayoutInterface {
  force: () => void;
}

/**
 * 用 hook 方式重写 RandomLayout
 */
class ForceLayout implements LayoutInterface {
  constructor() {}

  force() {}
}
