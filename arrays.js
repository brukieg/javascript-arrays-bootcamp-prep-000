var chocolateBars = ["snickers","hunderd grand", "kitkat", "skittles"];
chocolateBars.push ["butterfinger"]

var addElementToBeginningOfArray = ["February", "March", "April"];
addElementToBeginningOfArray.unshift('January') 

var destructivelyAddElementToBeginningOfArray = ["February", "March", "April"]
destructivelyAddElementToBeginningOfArray['January'] = 'January'
destructivelyAddElementToBeginningOfArray = ["January",...destructivelyAddElementToBeginningOfArray]

var addElementToEndOfArray = ["February", "March", "April"]
addElementToEndOfArray.push ['May']

var destructivelyAddElementToEndOfArray = ["February", "March", "April"]
destructivelyAddElementToEndOfArray = [...destructivelyAddElementToEndOfArray, 'May']

var accessElementInArray = ['Garfield', 'Odie', 'Jim']
var Odie = 'is a dog.'
console.log(accessElementInArray[1] + Odie)

var destructivelyRemoveElementFromBeginningOfArray = ["January", "February", "March"]
destructivelyRemoveElementFromBeginningOfArray.shift();
destructivelyRemoveElementFromBeginningOfArray;

var removeElementFromBeginningOfArray = ["Big", "Bad", "Cat"]
removeElementFromBeginningOfArray.slice(1)
removeElementFromBeginningOfArray;

var destructivelyRemoveElementFromEndOfArray = ["Blue", "Pink", "Red"]
destructivelyRemoveElementFromEndOfArray.pop()
destructivelyRemoveElementFromEndOfArray