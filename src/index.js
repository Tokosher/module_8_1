import { sayHello, sayGoodbye, getProperty } from './utils';
import numberPowSquare from './utils'

const superHeroes = [
  { heroName: 'Betman', power: 'superpower' },
  { heroName: 'Aquaman', power: 'super water power' },
  { heroName: 'Spiderman', power: 'spider power' }
]

const result = getProperty(superHeroes, 'Aquaman');
console.log(result);
sayHello('Mike');
sayGoodbye();

console.log(numberPowSquare(10));