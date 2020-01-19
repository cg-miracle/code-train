const { createList } = require("../help");

const list = createList(10);

// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
function printListFromTailToHead(head) {
  const result = [];
  let currentNode = head;
  while (currentNode) {
    result.unshift(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

console.log(printListFromTailToHead(list));
