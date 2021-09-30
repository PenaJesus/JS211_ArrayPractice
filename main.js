// 1. .length
let cars = ['Ford', 'Toyota', 'Tesla', 'Chevy'];
console.log('lenght of array:', cars.length)

//2. .concat
let moreCars = ['VW', 'BMW', 'Hyundai', 'Honda'];


let totalCars = cars.concat(moreCars)
console.log('TotalCars',totalCars)

//3. .indexOf & lastIndexOf
console.log('indexOfFord',totalCars.indexOf('Ford'));
console.log('indexOfFord',totalCars.lastIndexOf('Honda'));

//4. .join()
let stringOfCars = totalCars.join()
console.log('String of Cars',stringOfCars);

//5. .split()
let carsFromString = stringOfCars.split(',')
console.log('splitStrOfCars:', carsFromString);

//6. .reverse()

let carsInReverse = totalCars.reverse()
console.log('CarsInReverse:', carsInReverse);

//7. .sort()
console.log('Cars sorted:', carsInReverse.sort());

//8. pets array .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];

let reptiles = pets.slice(4,6)
console.log('sliced pets:', reptiles)
console.log('original pets:', pets)
//8a -  slice method does not change the original array

//9. splice()
let removedReptiles = pets.splice(4,2,)
//splice(start,deleteCount) First is where we want to begin splicing, DeleteCount is where we want to stop deleting...if left blank remaining elements get spliced
console.log('removedReptiles:',removedReptiles)
console.log('addingHamster:', pets.splice(4, 0 ,"hamster"));

//10. pop()
let removedPet = pets.pop()
console.log('removedPet',removedPet);
console.log('NewPets:',pets);

//11. push()
pets.push(removedPet)
console.log('RemovedPets added Back:', pets);

//12. shift()
const firstPet = pets.shift()
console.log('The first pet in array:',firstPet)

//13 unshift ()

let newFirstPet = pets.unshift('turtle')
console.log('NewFirstPet:', pets);

//14. .forEach()