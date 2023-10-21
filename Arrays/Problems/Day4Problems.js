// Finding the highest elelment in the array
// Finding the second highest elelent of the array
// Finding the smallest elelments in the array
// Finding the second smallest element in the array


const arr = [4, 3, 2, 1, 7, 8, 5, 2, 1];

//1.  finding highest elelment
// let highest = arr[0];
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] > highest){
//         highest = arr[i];

//     }
// }
// console.log(`The highest elements in the array is : ${highest}`);



// 2. finding second highest element in the array

arr.sort((a, b)=>{
    return b - a;
})
console.log(`Second highest element of the array is : ${arr[1]}`);
console.log(`Smallest element in the array is : ${arr[arr.length-1]}`)
console.log(`Second Smallest element in the array is : ${arr[arr.length-1-1]}`)