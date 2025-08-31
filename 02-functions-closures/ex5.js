/**
 * Ex5 — this vs Arrow
 * TODOs:
 * - Create an object with a normal method and an arrow method
 * - Demonstrate the difference in `this`
 */

const obj = {
  name: "Dave",
  normal: function () {
    // TODO: log this
    console.log("normal", this.name);
  },
  arrow: () => {
    // TODO: log this
    console.log("arrow", this.name);
  },
};

// TODO: test logs
obj.normal(); // expected: "normal: Alice"
obj.arrow();  // expected: "arrow: undefined" (or global value in non-strict mode)

const obj2 = { name: "Bob" };
obj2.normal = obj.normal;
obj2.arrow = obj.arrow;

obj2.normal(); // expected: "normal: Bob" (this bound to obj2)
obj2.arrow();  // expected: "arrow: undefined" (arrow keeps lexical scope)
