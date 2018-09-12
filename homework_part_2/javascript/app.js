// Part 1
// 1. Concatenation is the practice of combining multiple strings using the + operator.
// Interpolation is a similar practice, but involves combining strings with variables that we've previously declared
// 2. DRY stands for Don't Repeat Yourself. It's a best practice in programming, as it allows
// for clean code that runs faster and avoids repetition throughout your code that takes time to write and takes longer to process
// One tool that we've learned thus far is the practice of using loops, both for and while loops. This allows us to perform many iterations
// of a block of code without having to write that code many times over.
// 3. Declaring a variable does not necessarily involve assigning a value to it. To declare a variable num, we could simply say let num;
// To assign value, we use the = operator i.e. let num = 2 or const num = 2.
// To define a variable is to both declare and assign value to the variable.
// 4. We should use const when we do not plan on redefining a variable, though this does not preclude us from mutating the variable
// In most cases, we'll want to use const.
// We should use let to define a variable when we may want to use and redefine this variable several times throughout our program.
// For example, let is extremely useful when writing loops, as you will likley use this variable in multiple loops and want to redefine
// the variable on several occasions throughout your program.
// 5. A parent directory is higher in the file system than its children directories, which fall inside of the parent.
// So, when looking at file structure and opening a document tree, the parent directory of another directory will be the directory in which
// that child directory resides. However, that parent directory may also be the child of another directory, which would be the parent directory
// of that particular directory
// 6. You can use a few commands - specifically, you can use the man (short for manual) command, or the help command.
// 7. Tab completion allows you to complete commands by hitting tab. For example, if you're using the cd command to change directories and want 
// to navigate to "folder", you can type cd f and hit tab, which will either complete the command with cd folder/ or give you options for all directories
// within your working directory that begin with the letter f. It is a huge time saver.

// Part 2
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
 console.log(a < b);
 console.log(c > d);
 console.log('Name' === 'Name');
 console.log(a < b < c);
 console.log(a === a != d);
 console.log(e === 'Kevin');
console.log(48 == '48');

// Part 3
// 1. Yes, this is an infinite loop, because the condition while (true) will always evaluate to true. It is essentially the same sas saying
// let i = 1
// 	while (i=1) {//run this code}

// 2. Theoretically, this loop is infinite, because we can not redefine the variable runProgram, as we declared it with const. However, I belive that
// trying to redefine the const will result in an error, so we expect the output to be that the message is logged to the console one time before returning an error.

// 3.
//Defines a variable, letters, with a string value "A" let letters = "A";
// Defines a variable, i, with an initial value of 0. let i = 0;

// This sets our condition that will tell the loop to run. So long as the variable i is less than 20, the loop runs. while (i < 20) {
// This performs an action of string concatenation, adding A to our variable letters every time the loop runs	letters += "A";
// This line of code mutates our variable i by adding 1 to what the value of i was prior to the iteration of the loop that was just run i++;}

// This logs our final value of the variable letters to the console. Since the loop runs 20 times, and each iteration adds an A to our inital value of variable letters, I would expect that a final value of 21 As will be logged to the console. console.log(letters);

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//The result in the console was as I had anticipated.
// Part 4
// 1. While for and while loops are quite similar, for loops offer a more concise, condensed way of setting an initial expression, the condition, and the increment expression of the condition all within the control statement.
// 2.

for(let i = 0; i < 1000; i ++) {
	console.log(i);
};

// 3. The first part of the control statement is the initial expression
// The second part of the control statement is the condition, which must be true for the statement to execute
// The third part of the control statement is the increment expression, which changes our initial expression until the condition is not met, at which point the loop no longer runs.

//4.

for(let i = 999; i >= 0; i --) {
	console.log(i);
};

//5.

for(let i = 1; i <= 10; i ++) {
	console.log(`The value of i is: ${i} of 10`);
};