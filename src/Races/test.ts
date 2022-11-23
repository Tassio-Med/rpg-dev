import Dwarf from './Dwarf';

const torin = new Dwarf('torin', 5);
// const trawn = new Dwarf('trawn', 3);

console.log(torin.name);
console.log(torin.dexterity);
console.log(torin.maxLifePoints);
console.log(Dwarf.createdRacesInstances());