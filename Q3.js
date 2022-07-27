function reverseNumber(num) {
    var rNum = 0;
    while (num > 0) {
        rNum = rNum * 10;
        rNum += num % 10;
        num = Math.floor(num / 10);
    }
    return rNum;
}
console.log(reverseNumber(149))