const name = "rojan"
const repocount = 10
// console.log(name + repocount +"value")
console.log(`hello my name is ${name} and my total repo is ${repocount}`)
//another way of envoking string
const gamename = new String ('roja-nhc-hd')
// console.log(gamename.length)
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(2))
const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trims spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

console.log(gamename.split('-'));
