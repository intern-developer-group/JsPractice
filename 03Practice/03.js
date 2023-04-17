// Get a random integer from 1 to 10 inclusive
// ask number from user 
//if number match then print matched otherwise print not matched
const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);
