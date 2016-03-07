import Parser from '../src/parser/parser';
import NodeType from '../src/structure/node-type';
import assert from 'assert';

describe("parser test", function() {
  describe("simple use case", function() {
    it("should parse simple html", function() {
      let input = "<div>asdf</div>";
      let p = new Parser(input);
      let tree = p.parse();
      assert.ok(tree.nodeType === NodeType.ROOT);
      assert.ok(tree.children.length === 1);
      assert.ok(tree.children[0].nodeType === NodeType.ELEMENT);
      assert.ok(tree.children[0].children.length === 1);
      assert.ok(tree.children[0].tagName === "div");
      assert.ok(tree.children[0].children[0].nodeType === NodeType.TEXT);
      assert.ok(tree.children[0].children[0].text === "asdf");
    });
  });
});
