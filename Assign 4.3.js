// Q.3-Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4

var str = 'brainmentors';
var arr= str.split("");
console.log(arr);
var count=0;

for(var i=0;i<arr.length;i++){
  if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'){
    count++;
  }
  console.log(count);
}