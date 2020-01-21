// 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39
// 0 1 1 2 3 5 8
function Fibonacci(n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;
    let result =0;
    let pre = 1;
    let next = 1;
    for (let i = 2; i <= n; i++) {
        result = pre + next;
        pre = next;
        next = result;
    }
    return result;
}

console.log(Fibonacci(5))