// counting the elements in the array
// counting the even number and odd number present in the array
// sum of the array elements
// mean of the array


const arr = [5, 4, 3, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 98, 91];

console.log(`Total elements present in the array is : ${arr.length}`);
// counting even number and odd number

let evenCount = 0;
let oddCount = 0;

for(let i = 0; i<arr.length; i++) {
    if(arr[i]%2 == 0) {
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log(`Number of even element is : ${evenCount} and Number of odd element is : ${oddCount}`);

// sum of array elements

let sum = 0;
for(let i = 0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(`Sum of the array elements is : ${sum}`);

// mean of the array elements :

mean_array = sum/arr.length;
console.log(`Mean of the elements is : ${mean_array}`)
