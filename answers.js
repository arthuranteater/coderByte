// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function CheckNums(num1, num2) {
    return num1 === num2 ? -1 : num1 > num2 ? false : true
}


// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestWord(sen) {
    let long = 0
    const arr = sen.split(/[^A-Za-z\d]/)
    arr.map((w, i) => w.length > arr[long].length ? long = i : '')
    return arr[long]
}

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function TimeConvert(num) {
    return Math.floor(num / 60) + ':' + num % 60
}

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function AlphabetSoup(str) {
    return str.split('').sort().join('')
}

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function FirstReverse(str) {
    return str.split("").reverse().join("")
}

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function SimpleAdding(num) {
    let total = 0
    for (let i = num; i > 0; i--) {
        total += i
    }
    return total
}

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// 1. For the input "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect. The correct answer is b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~.

// incorrect answer? b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~

function LetterChanges(str) {
    const alpha = 'AbcdEfghIjklmnOpqrstUvwxyz'
    let nstr = ''

    str.split('').map((l, i) => {
        let test = /[A-Za-z]/i.test(str[i])
        str[i] === 'z' ? nstr += 'A' : !test ? nstr += str[i] : alpha.split('').map((a, j) => str[i].toLowerCase() === alpha[j].toLowerCase() ? nstr += alpha[j + 1] : '')
    })

    return nstr;
}

// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function SimpleSymbols(str) {
    let thruthy = false
    for (let i = 0; i < str.length; i++) {
        if (/^[a-zA-Z]+$/.test(str[i])) {
            if (str[i - 1] === '+' && str[i + 1] === '+') {
                thruthy = true
            }
            else {
                return false
            }
        }
    }
    return thruthy

}

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function FirstFactorial(num) {
    let sum = []
    for (let i = 1; i < num + 1; i++) {
        sum.push(i)
    }

    return sum.reduce((a, b) => a * b)

}

// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function QuestionsMarks(str) {
    var regex = /\d/
    let oneten = false
    let pair = []
    let qm = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '?') {
            qm++
        }
        if (str[i].match(regex)) {
            pair.push(str[i])
            if (pair.length === 2) {
                const sum = parseInt(pair[0]) + parseInt(pair[1])
                if (sum >= 10) {
                    oneten = true
                    if (qm !== 3) {
                        return false
                    }
                }
                pair.shift()
            }
            qm = 0
        }
    }
    if (oneten) {
        return true
    } else {
        return false
    }
}

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) {
    return str.split(' ').map(x => x[0].toUpperCase() + x.substr(1)).join(' ')
}

// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 

// Hard challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.

function KaprekarsConstant(num) {
    num = num.toString()
    let count = 0
    while (num !== '6174') {
        num = (num.split('').sort(function (a, b) { return b - a }).join('') - num.split('').sort(function (a, b) { return a - b }).join('')).toString()
        while (num.length < 4) {
            num = '0' + num
        }
        count++
    }
    return count
}

// Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 

// Hard challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.

function ChessboardTraveling(str) {


    const factor = num => {
        if (num === 0) {
            return 1
        }
        return num * factor(num - 1)
    }

    const xmove = str[6] - str[1]
    const ymove = str[8] - str[3]

    if (xmove === 0 || ymove === 0) {
        return 1
    } else {
        const tot = xmove + ymove
        return factor(tot) / (factor(xmove) * factor(ymove))
    }
}