function ListNode(x) {
  this.val = x;
  this.next = null;
}

function createList(number) {
  if (number < 0) return;
  const node = new ListNode(number);
  node.next = createList(number - 1);
  return node;
}

module.exports = {
  createList
};
