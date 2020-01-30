// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 0 1
function jumpFloor(number) {
  if (number == 0) return 0;
  if (number == 1) return 1;
  let sum,
    step1 = 1,
    step2 = 1;
  for (let i = 2; i <= number; i++) {
    sum = step1 + step2;
    step1 = step2;
    step2 = sum;
  }
  return sum;
}

// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number) {
  if (number < 0) return 0;
  let sum = 1;
  for (let i = 1; i < number; i++) {
    sum = 2 * sum;
  }
  return sum;
}
console.log(jumpFloorII(1));
