

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //apply concat() to merged two array

const allHeros1 = [...marvel_heros, ...dc_heros]; //spread operator
console.log(allHeros1);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_usable_array = anotherArray.flat(Infinity);
console.log(real_usable_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
