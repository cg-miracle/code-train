function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{ 1, 2, 4, 7, 3, 5, 6, 8 } 和中序遍历序列{ 4, 7, 2, 1, 5, 3, 8, 6 } ，则重建二叉树并返回。
function reConstructBinaryTree(pre, vin) {
  let root = null;
  if (!pre.length || !vin.length) {
    return root;
  }
  // 前序第一个值为根
  root = new TreeNode(pre[0]);
  // 在中序找到根的位置 i
  // 根据i 拆分成左子树和右子树
  for (let i = 0; i < vin.length; i++) {
    if (pre[0] == vin[i]) {
      root.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
      root.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
      break;
    }
  }
  return root;
}


// console code
const pre = [1, 2, 3, 4, 5, 6, 7];
const vin = [3, 2, 4, 1, 6, 5, 7];

console.log(reConstructBinaryTree(pre, vin));
