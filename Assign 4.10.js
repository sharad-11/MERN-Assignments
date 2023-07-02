// Q .10 Write a function to remove duplicate elements from an array while preserving the original order.
// ex:- arr = [1,2,5,2,5,1,6,7,7]

//   output:- [1,2,5,6,7]

var q=[1,2,5,2,5,1,6,7,7];
undefined
var narr = [];
q.filter(e=>(narr.includes(e)?narr.push(e):narr));

    
    
(9) [1, 2, 5, 2, 5, 1, 6, 7, 7]
console.log(narr);
VM961:1 []
undefined
var narr = [];
q.filter(e=>(!narr.includes(e)?narr.push(e):narr));

    
    
(9) [1, 2, 5, 2, 5, 1, 6, 7, 7]
console.log(narr);
VM971:1 (5) [1, 2, 5, 6, 7]