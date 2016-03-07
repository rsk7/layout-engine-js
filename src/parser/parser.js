import NodeType from '../structure/node-type';
import parseNodes from './parse-nodes'
import Node from '../structure/node';

export default class Parser {
  constructor(input) {
    this.pos = 0;
    this.input = input;
  }

  parse() {
    let nodes = parseNodes(this);
    let root = new Node(NodeType.ROOT);
    root.children = nodes;
    return root;
  }

  nextChar() {
    return this.input[this.pos];
  }

  startsWith(substring) {
    return this.input.indexOf(substring, this.pos) === this.pos;
  }

  eof() {
    return this.input[this.pos] === undefined;
  }
}

