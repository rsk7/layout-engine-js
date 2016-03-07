import Text from '../structure/text';
import {consumeWhile} from './input-consumers';

export default function parseText(parser) {
  return new Text(consumeWhile(/[^<]/, parser));
}
