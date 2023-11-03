// map, filter and reduce in Js

// const coding = ["js", "python", "cpp", "java", "swift"]


// const values = coding.forEach((item ) =>{
//     // console.log(item);
//     return item
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

const newNums = myNums.filter((item) => {
    return item %2 == 0
})
console.log(newNums);

const books  = [
    {
        title : 'Book One',
        genre : 'Fiction',
        publish : 1981, 
        edition : 2004
    },
    {
        title : 'Book two',
        genre : 'Non-Fiction',
        publish : 1992, 
        edition : 2008
    },
    {
        title : 'Book three',
        genre : 'History',
        publish : 1999, 
        edition : 2007
    },
]
// const userBooks = books.filter((bk) =>  bk.genre === 'History');
const userBooks = books.filter((bk) => bk.publish = 1992);
console.log(userBooks);



