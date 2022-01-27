// add element to an array 
var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('jamal');
lastBench.push('palam');
lastBench.push('nalam');
// console.log(lastBench); 

var friendsAge = [11, 13, 17, 12];
friendsAge.push(15);
console.log(friendsAge);

// remove element from an array 
friendsAge.pop();
friendsAge.pop();
var lastItem = friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);

// remove frist item frtom an array 
var numbers = [3, 4, 5, 6, 7];
numbers.shift();
numbers.shift();
console.log(numbers);

// add element in the begininig 
numbers.unshift(4);
numbers.unshift(3);
numbers.unshift(2);
numbers.unshift(1);
console.log(numbers);