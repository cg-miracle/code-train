//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
const stack1 = [];
const stack2 = [];

function push(node) {
  stack1.push(node);
}
function pop() {
  if (stack2.length) {
    return stack2.pop();
  } else {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
    return stack2.pop();
  }
}

push(1);
push(2);
push(3);
console.log(pop()); // 1
