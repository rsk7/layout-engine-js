import Node from './node';
import NodeType from './node-type';

export default class Text extends Node {
  constructor(text) {
    super(NodeType.TEXT);
    this.text = text;
  }
}
