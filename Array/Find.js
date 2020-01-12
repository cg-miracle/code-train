// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

/**
 *
 * 暴力搜素 遍历二维数组的所有元素
 * 时间复杂度 O(n2) 双重循环
 * 空间复杂度 O(1) 没有开辟新的空间
 */
function Find(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) return true;
    }
  }
  return false;
}

/**
 * 从左下角数开始查找 因为左下角数有当前列最大当前行最小的特点
 * 如果第一个数不满足 就可以跳过当前行
*/
function Find2(target, array) {
  if (!array.length) return false;
  if (!array[0].length) return false;
  let row = array.length - 1;
  let col = 0;
  while (row >= 0 && col < array[0].length) {
    if (array[row][col] < target) {
      col++;
    } else if (array[row][col] > target) {
      row--;
    } else {
      return true;
    }
  }
  return false;
}

const testArray = [
  [1, 2, 4],
  [4, 5, 6],
  [5, 6, 7]
];
console.log(Find2(5, testArray));
