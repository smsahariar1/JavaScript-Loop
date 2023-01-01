/*
WHAT IS WHILE LOOP?
Answer: 
The most basic loop in JavaScript is the while loop. The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.
*/

/*
How I write while loop?
Answer:
First The loop initialization where we initialize our counter to a starting value. The initialization statement is executed before the loop begins. Example: let n = 1;

Second we use while(condition){
    what we want to execute
    The iteration statement where you can increase or decrease your counter. Example: n++ / n--
}
*/

let n = 1;
while (n <= 10) {
  console.log("Looping: ", n);
  n++;
}

let i = 10;
while (i >= 1) {
  console.log("Another looping: ", i);
  i--;
}
