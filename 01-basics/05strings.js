const name= "jaskaran singh"
const rollno=234009
//console.log(name+rollno+"hello")//IT IS A BAD CODE


//ANOTHER WAY TO DO THIS IS USING ( ` ) and is a good code
//console.log(`hello my name is ${name} and my roll nuber is ${rollno}.`)


//ANOTHER WAY OF CREATING STRING IS AS FOLLOWS

const gamename = 'hulalla hoo hooo hoo'

//now we can access any index value of it ,know its length and do any operation to it.
// +++ NOTE: the original string will remain same because it is in stack memory.
// in stack memory it is copied only thats why it does not change. 

//console.log(gamename[0]);
//console.log(gamename.length)
//console.log(gamename.toUpperCase())

//console.log(gamename.charAt(4))
//console.log(gamename.indexOf("l"))


// now we have another important funtions like substring,slice,trim,replace

const newstring= gamename.substring(0,5)
console.log(newstring)

const anotherstring=gamename.slice(-6,5)
console.log(anotherstring)

const nestring= "    jaskaran    "
console.log(nestring)
console.log(nestring.trim())

const url= "https://hulallapuihulalla.com"
console.log(url.replace("pui","mui"))

// split function

console.log(gamename.split(" "))