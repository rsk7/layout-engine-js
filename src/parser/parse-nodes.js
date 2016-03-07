import parseElement from './parse-element';
import parseText from './parse-text';
import {consumeChar, consumeWhitespace} from './input-consumers';

export default function parseNodes(parser) {
  let nodes = [];
  while(true) {
    consumeWhitespace(parser);
    if (parser.eof() || parser.startsWith("</")) {
      break;
    }
    nodes.push(parseNode(parser));
  }
  return nodes;
}

function parseNode(parser) {
  if (parser.nextChar() === '<') {
    return parseElement(parser);
  } else {
    return parseText(parser);
  }
}
