let userInput: unknown;
let userName: string;

//These both work because the type is not known
userInput = 5;
userInput = 'Max';

//this does not work because username is expecting a string and userInput isn't specified.
//username = userInput

//this works because of the if statement
if (typeof userInput === 'string') {
  userName = userInput;
}

//this function crashes the program so it never returns anything. So the type is never.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);
