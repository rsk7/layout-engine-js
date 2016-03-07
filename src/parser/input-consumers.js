export function consumeChar(parser) {
  let current = parser.nextChar();
  parser.pos++;
  return current;
}

export function consumeWhile(regex, parser) {
  let result = '';
  let test = (character) => regex.test(character);
  while(!parser.eof() && test(parser.nextChar())) {
    result += consumeChar(parser);
  }
  return result;
}

export function consumeWhitespace(parser) {
  consumeWhile(/\s/, parser);
}

