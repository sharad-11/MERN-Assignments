//Q.9function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1); 
  const set2 = new Set(arr2); 

  const intersection = new Set([...set1].filter(num => set2.has(num))); 

  return Array.from(intersection); 
}


const arr1 = [2, 4, 1, 7, 4, 2];
const arr2 = [5, 1, 4, 7, 3, 1];

console.log(findIntersection(arr1, arr2));
