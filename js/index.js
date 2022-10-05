// Iteration 1: Names and Input
const hacker1= "Marcela";
console.log( "The driver's name is" + " " + hacker1);

const hacker2= "Ehab";
console.log("The navigator's name is" + " " + hacker2);


// Iteration 2: Conditionals

const isLonger = () =>{
let a = hacker1.length;
let b = hacker2.length;
if (a > b) console.log("The driver has the longest name, it has" + " " + (hacker1.length) + " " + "characters.");
else if( b > a) console.log("It seems that the navigator has the longest name, it has" + " " + (hacker2.length) + " " + "characters.");
else if (a===b) console.log ("Wow, you both have equally long names");
}
isLonger()

// Iteration 3: Loops

// UPPERCASE

function upperWith(str) {

    str = str.split(' ');
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      result += str[i].toUpperCase().split("").join(" ");
    }
    return result;
  }
  
  console.log(upperWith(hacker1))

  // REVERSE

  function reverseWith(str) {

    str = str.split(' ');
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i].toUpperCase(1).split("").reverse().join("");
    }
    return result;
  }
  

  console.log(reverseWith(hacker2))

  
// LEXICOGRAPHIC




  
  

