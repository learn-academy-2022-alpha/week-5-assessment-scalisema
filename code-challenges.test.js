// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("Create a function that returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(message(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(message(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(message(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.
// function message(string) {
// Now i have to create a function 
// creatre a variable called message that takes in a string
// use conditionals with .include to find the letters A E I O (both in lower and upper case)
//  use .repleace to create a new string with the found letters replaced

const message = (string) => {
    if (string.includes("aA") || ("eE") || ("iI") || ("oO")) {
        var message = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
    }
    return message
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordSearch", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {

        expect(wordSearch(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(wordSearch(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})


// b) Create the function that makes the test pass.
//create a funcation that takes in both an array and string (letter)
// use the filter method because we want to fliter values in an array
// filter for upper and lower case versions of the letter strings and return the values that contain these values

const wordSearch = (array, letter) => {
    let wordSearch = array.filter(value => {
        return value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase())
    })
    return wordSearch
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    //     // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    //     // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("take in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})


// b) Create the function that makes the test pass.
// a full house contains 2 values so if there are more than 2 unique values then we dont have a full house
// create a funcation and iterate through the orginal array,
// im going to push values into three arrays depending on if their values match
// the first value will go into the first array value1
// if a supsquent values match they're added to value 1
// the next unique value will go into value 2 if  subsquent values match it they will go into value 2
// any other values will go into value 3 if there are any values in value 3 then we know it's not a full house
// if value 3 is empty then there were at most two unique values but this could also be a 4 of a kind
// so to find a fullhouse we'll evaluate if value 3 is 0 and value1 is 2 or 3 values in length but not 4 becaue we dont want to confuse a 4 of a kind with a full house

const fullHouse = (hand) => {
    let value1 = [hand[0]]
    let value2 = []
    let value3 = []
    for (let i = 1; i < hand.length; i++) {
        if (hand[i] === value1[0]) {
            value1 = [...value1, hand[i]]
        } else if (value2.length === 0) {
            value2 = [hand[i]]
        } else if (hand[i] === value2[0]) {
            value2 = [...value2, hand[i]]
        } else {
            value3 = [...value3, hand[i]]
        }
    }
    return (value3.length === 0 && value1.length === (3 || 2)) ?
        true : false
}

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))