//Aim: Write a function redundantReturn that takes in a string str 
// and returns a function that returns str.


 
function wave (wave) {
return function (name) {
  return `${name}! ${wave}`;
};
}

cons friendlyWave = wave("hola!");
cons informalWave = wave("What's up?");

console.log ("friendlyWave:", friendlyWave("Isabelle"));
console.log ("informalWave:", informalWave("Isabelle"));

