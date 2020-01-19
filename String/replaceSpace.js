// 请实现一个函数，
// 将一个字符串中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str) {
  let result = "";
  if (!str.length) return result;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      result += "%20";
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

console.log(replaceSpace('We Are Happy'))