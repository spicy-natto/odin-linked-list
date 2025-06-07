import LinkedList from "../src/modules/LinkedList.js";

describe("Linked List", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.append("one");
    linkedList.append("two");
    linkedList.append("three");
  });

  test("toString", () => {
    expect(linkedList.toString()).toBe("( one ) -> ( two ) -> ( three )");
  });

  describe("append", () => {
    test("list with size > 0", () => {
      linkedList.append("apple");
      expect(linkedList.toString()).toBe(
        "( one ) -> ( two ) -> ( three ) -> ( apple )"
      );
    });
    test("list with size = 0", () => {
      linkedList = new LinkedList();
      linkedList.append("apple");
      expect(linkedList.toString()).toBe("( apple )");
    });
  });

  describe("prepend", () => {
    test("list with size > 0", () => {
      linkedList.prepend("apple");
      expect(linkedList.toString()).toBe(
        "( apple ) -> ( one ) -> ( two ) -> ( three )"
      );
    });
    test("list with size = 0", () => {
      linkedList = new LinkedList();
      linkedList.prepend("apple");
      expect(linkedList.toString()).toBe("( apple )");
    });
  });

  test("size", () => {
    expect(linkedList.size).toBe(3);
  });

  test("head", () => {
    expect(linkedList.head.value).toBe("one");
  });

  test("tail", () => {
    expect(linkedList.head.value).toBe("three");
  });

  test("at", () => {
    expect(linkedList.at(1).value).toBe("two");
  });

  test("pop", () => {
    let lastNode = linkedList.pop();
    expect(lastNode.value).toBe("three");
    expect(linkedList.toString()).toBe("( one ) -> ( two )");
  });

  test("contains", () => {
    expect(linkedList.contains("two")).toBe(true);
    expect(linkedList.contains("banana")).toBe(false);
  });

  test("find", () => {
    expect(linkedList.find("two")).toBe(1);
    expect(linkedList.find("banana")).toBe(null);
  });

  test("insertAt", () => {
    linkedList.insertAt("lychee", 1);
    expect(linkedList.toString()).toBe(
      "( one ) -> ( lychee ) -> ( two ) -> ( three )"
    );
  });

  test("removeAt", () => {
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe("( one ) -> ( three )");
  });
});
