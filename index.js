function hasTargetSum(array, target) {
  // Write your algorithm here
   for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if((array[i] + array[j]) === target) {
        return true;
      }       
    }
  } 

  return false;
}

  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

/* 
  Write the Big O time complexity of your function here
  quadratic 
*/

/* 
  Add your pseudocode here
  --iterate through an array
  --add sums of 2 nums and return true if target value is hit.
  keep going if target not hit
*/

/*
  Add written explanation of your solution here
  the first loop iterates through, I. the second loop, J, iterates through a second number one index
  infront of I. the two numbers, I and J, will be added together and see if their sum equals the
  total of the target number. as they loop the number will test every possible cobmination on the 
  values. if the sum does equal the target, it will return true, otherwise it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
