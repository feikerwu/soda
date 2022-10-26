import { isObject } from './detect';

/**
 * 生成一个随机落地的布局方案
 */
type NodeDatum = { id: string; [key: string]: any };

export function randomLayout(nodes: (number | string | NodeDatum)[]) {
  let initialDistance = 100,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

  // normalize nodes
  let layoutNodes = nodes.map(node => {
    return isObject(node) ? node : { id: '' + node };
  });

  layoutNodes.forEach((node, index) => {
    node.index = index;
    let distance = initialDistance * Math.sqrt(0.5 + index);
    let angle = initialAngle * index;

    node.x = distance * Math.cos(angle);
    node.y = distance * Math.sin(angle);
  });

  return layoutNodes;
}

// console.log(randomLayout([2, 3, 4, 1, 3, 124, 12]));
