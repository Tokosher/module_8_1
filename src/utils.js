function sayHello (name) {
  console.log(`Hello, my name is ${name}`);
}

function sayGoodbye () {
  console.log('Goodbye');
}

function getProperty (heroesArray, heroName) {
  return heroesArray.find(hero => hero.heroName === heroName).power;
}

function numberSquare (number) {
  return Math.pow(number, 2);
}

export {
  sayHello,
  sayGoodbye,
  getProperty
}

export default numberSquare;
