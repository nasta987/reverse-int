module.exports = function reverse (n) {
  n=Math.abs(n);
  const str = n.toString();
let reverseStr = "";
for (let i = 0; i < str.length; i += 1) {
    reverseStr = `${str[i]}${reverseStr}`;
} return Number(reverseStr);
}
