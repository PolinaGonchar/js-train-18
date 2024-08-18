// Task 1
/**
 * The `checkData` function checks for the presence of data.
 * In case of an error, an error with a cause is thrown.
 *
 *  data - input data.
 */
function checkData(data) {
  try {
    if (Object.keys(data).length) {
      return data;
    } else {
      throw new Error("The object is empty");
    }
  } catch (error) {
    return error.message;
  }
}

console.log("Task: 1 ==============================");

console.log(checkData({}));
// Outputs: The object is empty
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Outputs: { name: 'John', age: 30, city: 'New York' }

// Task 2
/**
 * The `parseJson` function attempts to parse the input JSON string.
 * If the string has an incorrect format, an error with the corresponding message is thrown.
 *
 *  jsonStr - JSON string to parse.
 */
function parseJson(jsonStr) {
  try {
    let data = JSON.parse(jsonStr);
    return data;
  } catch (error) {
    return error.message;
  }
}
console.log("Task: 2 ==============================");

// Input JSON string with the correct format.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Input JSON string with an incorrect format.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Missing closing quote after "John".

// Attempt to parse the JSON strings.
console.log(parseJson(validJson));
// Outputs: { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Outputs: Unexpected token a in JSON at position 15

// Task 3

/**
 * The `getAge` function retrieves the user's age.
 * If the user's age is less than 0, an error with the corresponding message is thrown.
 *
 *  age - the user's age.
 */
function getAge(age) {
  try {
    if (age > 0) {
      return `User's age: ${age}`;
    } else {
      const error = new Error("Age cannot be less than 0!");
      error.name = "AgeError";
      throw error;
    }
  } catch (error) {
    return { error: error.message, name: error.name };
  }
}
console.log("Task: 3 ==============================");

// Call the function with a negative age.
console.log(getAge(-1));
// Outputs: { error: 'Age cannot be less than 0!', name: 'AgeError' }
// Call the function with age 20.
console.log(getAge(20));
// Outputs: User's age: 20

// Task 4
/**
 * The `getBookById` function retrieves a book by its ID.
 * If a book with that ID does not exist, a TypeError is thrown.
 *
 *  books - array of books.
 *  id - book ID.
 */
function getBookById(books, id) {
  try {
    let book = books.find((book) => book.id === id);
    if (!book) {
      throw new TypeError(`Book with ID ${id} not found!`);
    }
    return `Book: ${book.title}`;
  } catch (error) {
    return error.toString();
  }
}
console.log("Task: 4 ==============================");

// Call the function with a non-existent ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Book 1" },
      { id: 2, title: "Book 2" },
    ],
    3
  )
);
// Outputs: TypeError: Book with ID 3 not found!
console.log(
  getBookById(
    [
      { id: 1, title: "Book 1" },
      { id: 2, title: "Book 2" },
    ],
    2
  )
);
// Outputs: Book: Book 2

// Task 5

/**
 * The `decodeURIComponentWrapper` function decodes the string `encodedString`
 * using the `decodeURIComponent` function. If a URIError occurs,
 * it is caught and an error message is displayed.
 *
 *  encodedString - The string to decode.
 */
function decodeURIComponentWrapper(encodedString) {
  try {
    const decodedString = decodeURIComponent(encodedString);
    return decodedString;
  } catch (error) {
    if (error.name === "URIError") {
      return new URIError("URI decoding error");
    } else {
      return new Error(error.toString());
    }
  }
}

console.log("Task: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // Outputs: 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // Outputs information about a URIError

// Task 6
/**
 * The `findEvenNumber` function finds the first number divisible by 2 in the array.
 * If no such number exists, it throws an error.
 *
 *  numbers - Array of numbers to search.
 */
function findEvenNumber(numbers) {
  let evenNumber;
  try {
    evenNumber = numbers.find((number) => number % 2 === 0);
    if (evenNumber === undefined) {
      throw new Error("No numbers divisible by 2 in the array!");
    }
    return evenNumber;
  } catch (error) {
    return error.toString();
  } finally {
    console.log(numbers);
  }
}

console.log("Task: 6 ==============================");
// Call the function with an array of numbers.
console.log(findEvenNumber([1, 3, 5]));
// Outputs
// [ 1, 3, 5 ]
// Error: No numbers divisible by 2 in the array!;
console.log(findEvenNumber([1, 4, 5]));
// Outputs
// [ 1, 4, 5 ]
// 4

// Task 7
/**
 * The `validateUser` function checks the user object for compliance with specified requirements.
 * If the user object does not meet the requirements, it throws an error with a cause.
 *
 *  user - The user object to check.
 */
function validateUser(user) {
  try {
    if (!user) {
      throw new Error("User object not specified!");
    }
    if (!user.name) {
      throw new Error("User name not specified!", { cause: user });
    }
    if (!user.email) {
      throw new Error("User email not specified!", { cause: user });
    }
    console.log("The user object meets all requirements.");
  } catch (error) {
    console.error(error.message, error.cause);
  }
}

console.log("Task: 7 ==============================");

// Call the function with an incomplete user object.
validateUser({ name: "John Doe" });
// Outputs
// User email not specified! { name: 'John Doe' }

// Task 8
/**
 * The `calculateSquareRoot` function calculates the square root of a number.
 * If the argument is not a number, it throws a TypeError.
 * If the number is negative, it throws a RangeError.
 *
 *  number - The number to calculate the square root for.
 */
function calculateSquareRoot(number) {
  try {
    if (typeof number !== "number") {
      throw new TypeError("Argument must be a number!");
    }
    if (number < 0) {
      throw new RangeError("Number must not be negative!");
    }
    return Math.sqrt(number);
  } catch (error) {
    return error.message;
  }
}

console.log("Task: 8 ==============================");

console.log(calculateSquareRoot(9));
// Outputs: 3
console.log(calculateSquareRoot(-9));
// Outputs: Number must not be negative!
console.log(calculateSquareRoot("abc"));
// Outputs: Argument must be a number!

// Task 9

/**
 * The `processData` function processes an array of numbers.
 * If there is a non-number in the array, it throws a TypeError.
 *
 *  data - Array of numbers to process.
 */
function processData(data) {
  try {
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] !== "number") {
        throw new TypeError(`Element at index ${i} must be a number!`);
      }
    }
    return "Data successfully processed";
  } catch (error) {
    console.error(error.stack);
    return error.message;
  }
}

console.log("Task: 9 ==============================");

// Call the function with correct data
console.log(processData([1, 2, 3]));
// Outputs: Data successfully processed

// Call the function with incorrect data
console.log(processData([1, "two", 3]));
// Outputs: Element at index 1 must be a number!

// Task 10
/**
 * The `evaluateExpression` function calculates the result of a mathematical expression passed as a string.
 * The `eval` function is used to evaluate the expression. If an EvalError occurs,
 * it is caught and an error message is displayed.
 *
 *  expression - Mathematical expression as a string.
 */
function evaluateExpression(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return new EvalError(error.message);
  }
}

console.log("Task: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // Outputs: 4
console.log(evaluateExpression("10 / hello")); // Outputs: EvalError: hello is not defined and error information
