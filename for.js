/*
The 'for' loop is the most compact form of looping. It includes the following three important parts −

The loop initialization where we initialize our counter to a starting value. The initialization statement is executed before the loop begins.

The test statement which will test if a given condition is true or not. If the condition is true, then the code given inside the loop will be executed, otherwise the control will come out of the loop.

The iteration statement where you can increase or decrease your counter.

You can put all the three parts in a single line separated by semicolons.
*/

for (let n = 1; n <= 10; n++) {
  console.log("Looping: ", n);
}

for (let i = 10; i >= 1; i--) {
  console.log("Another Looping: ", i);
}
