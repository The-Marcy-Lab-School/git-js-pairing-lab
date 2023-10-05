const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
};

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
};

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
};

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => {
    return a === b ? (a + b) * 3 : a + b;
};

const isNegative = (num) => {
    if (Math.sign(num) === -1) {
        return true;
    } else {
        return false;
    }
};

// 8
const triangleArea = (height, base) => 0.5 * base * height;
// 9
const betweenTwentyAndFourty = (num) => num >= 20 && num <=40 ? true : false


// 10
const largest = (num1, num2, num3) => Math.max(num1, num2, num3);

// 12
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// 14
const absoluteNineteen = (num) => Math.abs(num - 19) * num > 19 ? 3 : 1;

// 16
const changeString = (str) => {
    // NOTE: this solution allocates more than it needs to and it makes 'z' become '{' (ASCII),
    // but the prompt doesn't specify what should happen in this situation.
    return String.fromCharCode(...[...str].map(ch => ch.charCodeAt(0) + 1));
};






(() => {
    const test = (name, fn) => {
        const header = `${name}...`.padEnd(30);
        try {
            fn();
            console.log(header, "passed!");
        } catch (ex) {
            console.log(header, `${ex}`);
        }
    };

    const assertEq = (a, b) => {
        if (a === b) return;
        throw new Error(`expected ${b}, got ${a}`);
    };

    test("multiply", () => assertEq(multiply(2, 4), 8));
    test("multiply", () => assertEq(multiply(10, -5), -50));
    test("multiply", () => assertEq(multiply(3, 7.5), 22.5));

    test("add", () => assertEq(add(2, 4), 6));
    test("add", () => assertEq(add(10, -5), 5));
    test("add", () => assertEq(add(3, 7.5), 10.5));
    test("add", () => assertEq(add(5, 5), 30));
    test("add", () => assertEq(add(6, 6), 36));

    test("isNegative", () => assertEq(isNegative(3), false));
    test("isNegative", () => assertEq(isNegative(-2), true));
    test("isNegative", () => assertEq(isNegative(Math.PI), false));

    test("triangleArea", () => assertEq(triangleArea(5, 7), 17.5));
    test("triangleArea", () => assertEq(triangleArea(6, 8), 24));

    test("betweenTwentyAndFourty", () => assertEq(betweenTwentyAndFourty(4), false));
    test("betweenTwentyAndFourty", () => assertEq(betweenTwentyAndFourty(21), true));
    // XXX: the readme says this should return true, but obviously
    // 99 is not between 20 and 40. assuming that is a error.
    test("betweenTwentyAndFourty", () => assertEq(betweenTwentyAndFourty(99), false /* true */));
    test("betweenTwentyAndFourty", () => assertEq(betweenTwentyAndFourty(101), false));

    test("largest", () => assertEq(largest(4, 6, 8), 8));
    test("largest", () => assertEq(largest(30, 22, 17), 30));
    test("largest", () => assertEq(largest(41, 108, 86), 108));

    // TODO: printTime tests

    test("isLeapYear", () => assertEq(isLeapYear(2000), true));
    test("isLeapYear", () => assertEq(isLeapYear(1900), false));
    test("isLeapYear", () => assertEq(isLeapYear(2020), true));
    test("isLeapYear", () => assertEq(isLeapYear(1999), false));

    // NOTE: getExtention is a typo
    test("getExtension", () => assertEq(getExtension("hello.txt"), ".txt"));
    test("getExtension", () => assertEq(getExtension("app.js"), ".js"));
    test("getExtension", () => assertEq(getExtension("README.md"), ".md"));

    test("absoluteNineteen", () => assertEq(absoluteNineteen(20), 3)); // |20 - 19| * 3  // |1| * 3 // 3
    test("absoluteNineteen", () => assertEq(absoluteNineteen(5), 3));  // |5 - 19|       // |-14| // 14

    test("switchLetters", () => assertEq(switchLetters("anne"), "enna"));
    test("switchLetters", () => assertEq(switchLetters("hello world"), "dello worlh"));
    test("switchLetters", () => assertEq(switchLetters("a"), "a"));
    test("switchLetters", () => assertEq(switchLetters(""), ""));

    test("changeString", () => assertEq(changeString("abc"), "bcd"));
    test("changeString", () => assertEq(changeString("helloworld"), "ifmmpxpsme"));
})();
