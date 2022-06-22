module.exports = function toReadable(number) {
    const arrayOfstrings = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const apartNumber = [];
    let divider = 1;
    let module = 10;
    let step = 1;
    while (number) {
        digit = Math.trunc((number % module) / divider) * step;
        apartNumber.unshift(digit);
        number = Math.trunc(number / 10);
        step = step * 10;
    }

    console.log(apartNumber);
    function tensOfNumber(num1, num2) {
        let string = "";
        let string1 = "";
        let string2 = "";
        let string3 = "";
        if (num1 + num2 <= 20) {
            string2 = arrayOfstrings.find((i, index) => index === num1 + num2);
        } else {
            string2 = arrayOfstrings.find((i, index) => index === num1);
            string3 = num2
                ? arrayOfstrings.find((i, index) => index === num2)
                : "";
        }
        if (num1 + num2 >= 30) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `thirty`;
        }
        if (num1 + num2 >= 40) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `forty`;
        }
        if (num1 + num2 >= 50) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `fifty`;
        }
        if (num1 + num2 >= 60) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `sixty`;
        }
        if (num1 + num2 >= 70) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `seventy`;
        }
        if (num1 + num2 >= 80) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `eighty`;
        }
        if (num1 + num2 >= 90) {
            string3 = arrayOfstrings.find((i, index) => index === num2);
            string2 = `ninety`;
        }
        string1 =
            apartNumber[0] >= 100
                ? arrayOfstrings.find(
                      (i, index) => index === apartNumber[0] / 100
                  ) + " hundred"
                : "";

        return (string = `${string1} ${string2} ${string3}`).trim();
    }
    if (apartNumber[0] >= 100) {
        return tensOfNumber(apartNumber[1], apartNumber[2]);
    } else if (apartNumber[0] < 100) {
        return tensOfNumber(apartNumber[0], apartNumber[1]);
    } else if (apartNumber.length === 0) {
        return "zero";
    } else if (apartNumber[0] <= 10) {
        return arrayOfstrings.find((i, index) => index === apartNumber[0]);
    }
};
