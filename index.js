// code your solution here
function saturdayFun(party="roller-skate"){
    return `This Saturday, I want to ${party}!`
}
function mondayWork(sleep="go to the office"){
    return `This Monday, I will ${sleep}.`
}
let wrapAdjective = function(name = "*") {
   
    return function(place= "special") {
        return `You are ${name}${place}${name}!`;
    }
} 