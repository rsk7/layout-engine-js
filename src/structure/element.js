import Node from './node';
import NodeType from './node-type';

export default class Element extends Node {
  constructor(tagName, attributes, nodes) {
    super(NodeType.ELEMENT, nodes);
    this.tagName = tagName;
    this.attributes = attributes;
  }
}
