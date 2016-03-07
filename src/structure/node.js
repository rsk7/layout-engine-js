export default class Node {
  constructor(nodeType, nodes) {
    this.children = nodes;
    this.nodeType = nodeType;
  }

  add(node) {
    this.children.push(node);
  }
}


