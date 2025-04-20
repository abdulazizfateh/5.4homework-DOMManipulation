// CODEWARS - 8KYU

//P1
const humanYearsCatYearsDogYears = function (h) {
    let c = 0;
    let d = 0;
    if (h >= 2) {
        c = (15 + 9) + (h - 2) * 4;
        d = (15 + 9) + (h - 2) * 5;
        return [h, c, d];
    }
    return [h, c + 15, d + 15]
}




// P2
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            return arr[i];
        }
    }
    return null;
}




// P3
String.prototype.toAlternatingCase = function () {
    let newString = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            newString += this[i].toLowerCase();
        }
        else {
            newString += this[i].toUpperCase();
        }
    }
    return newString;
}




// P4
function correct(string) {
    let newString = "";
    for (let item of string) {
        if (item === "5") {
            newString += "S"
        } else if (item === "0") {
            newString += "O";
        } else if (item === "1") {
            newString += "I";
        } else {
            newString += item;
        }
    }
    return newString;
}




// P5.1 - Using For Loop to reverse the string
function isPalindrome(y) {
    let x = y.toUpperCase();
    let rL = "";
    for (let i = x.length - 1; i >= 0; i--) {
        rL += x[i];
    }
    return rL === x;
}

// P5.2 - Using split(), reverser(), join() methods to reverse the string
{
    const isPalindrome = (str) => {
        let insensitiveStr = str.toUpperCase();
        return insensitiveStr === insensitiveStr.split("").reverse().join("");
    }
}




// P6
function finalGrade(exam, projects) {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
}




// P7
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}




// P8
function sumStr(a, b) {
    let result = +a + +b;
    return `${result}`
}




// P9
function expressionMatter(a, b, c) {
    let first = a * (b + c);
    let second = a * b * c;
    let third = a + (b * c);
    let fourth = (a + b) * c;
    let fifth = a + b + c;
    let arr = [first, second, third, fourth, fifth];
    let max = Math.max(...arr);
    return max;
}




// P10
function howMuchILoveYou(petals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    return phrases[(petals - 1) % 6];
}




// P11
function reverseList(list) {
    return list.reverse()
}




// P12
function oddCount(n) {
    return Math.floor(n / 2)
}