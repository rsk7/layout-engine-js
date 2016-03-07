import Element from '../structure/element';
import parseNodes from './parse-nodes.js';
import {consumeChar, consumeWhile, consumeWhitespace} from './input-consumers';

function parseTagName(parser) {
  return consumeWhile(/\w/, parser);
}

function parseAttributeValue(parser) {
  let openQuote = consumeChar();
  assert(openQuote === '"' || openQuote === "'");
  let value = consumeWhile(new RegExp(openQuote), parser);
  assert(consumeChar(parser) === openQuote);
  return value;
}

function parseAttribute(parser) {
  let name = parseTagName(parser);
  assert(consumeChar(parser) === '=');
  let value = parseAttributeValue(parser);
  return {key: name, value: value};
}

function parseAttributes(parser) {
  let attributes = {};
  while (true) {
    consumeWhitespace(parser);
    if (parser.nextChar() === '>') {
      break;
    }
    let attr = parseAttribute(parser);
    attributes[attr.key] = attr.value;
  }
  return attributes;
}

function assert(condition) {
  if (!condition) {
    throw new Error('assert failed');
  }
}

export default function parseElement(parser) {
  // Opening tag
  assert(consumeChar(parser) === '<');
  let tagName = parseTagName(parser);
  let attrs = parseAttributes(parser);
  assert(consumeChar(parser) === '>');

  // contents
  let children = parseNodes(parser);

  // Closing tag
  assert(consumeChar(parser) === '<');
  assert(consumeChar(parser) === '/');
  assert(parseTagName(parser) === tagName);
  assert(consumeChar(parser) === '>');

  return new Element(tagName, attrs, children);
}
