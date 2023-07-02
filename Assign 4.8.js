// Q-8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]

var arr=[1,2,3,4,5];
function rotateArray(p, steps) {
  const rotatedArray = [...p];

  for (let i = 0; i < steps; i++) {
    const lastElement = rotatedArray.pop();
    rotatedArray.unshift(lastElement);
  }

  return rotatedArray;
}
undefined
const p=[1,2,3,4,5];
undefined
const steps = 2;
undefined
rotateArray(p,steps);
(5) [4, 5, 1, 2, 3]
