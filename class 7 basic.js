//Aim: Write a function redundantReturn that takes in a string str 
// and returns a function that returns str.



    
function wave (wave) {
return function (name) {
  return `${name}! ${wave}`;
}

const friendlyWave = wave("Hola!")
const informalWave = wave("What's up?")

}