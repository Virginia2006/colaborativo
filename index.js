var cowsay = require('cowsay');
const intro = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');

const  personaje3 = "Vick";
const  personaje = "Andy";
const  personaje2 = "Natasha";

const  edad = Math.round(Math.random() * 100);
const  villano = "Rich";
const  lugar = "En far far away";
const  hobby = "programar";


console.log(intro.historia(personaje, lugar, edad));

console.log(cowsay.say({
  text : 'Hola',
  e : "O O",
  T : "U"
}));
