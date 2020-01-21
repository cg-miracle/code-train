// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// O(n)
function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) return 0;
  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i + 1] && rotateArray[i + 1] < rotateArray[i]) {
      return rotateArray[i + 1];
    }
  }
}

// 二分查找法
function minNumberInRotateArray2(rotateArray) {
  if (!rotateArray.length) return 0;
  let left = 0;
  let right = rotateArray.length - 1;
  let mid = 0;
  while (left < right) {
    if (rotateArray[left] < rotateArray[right]) return rotateArray[left];
    mid = (left + right) >> 1;
    if (rotateArray[left] < rotateArray[mid]) {
      left = mid + 1;
    } else if (rotateArray[right] > rotateArray[mid]) {
      right = mid;
    } else {
      left++;
    }
  }
  return rotateArray[left];
}

console.log(minNumberInRotateArray2([1, 1, 1, 0, 1]));
