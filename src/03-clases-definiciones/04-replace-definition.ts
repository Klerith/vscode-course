import { Hero } from './extra/classes';

//* 
//*     Objetivo:
//*         Cambiar únicamente la refencia de SuperHero a Heroe
//*         OJO!: Pero no reemplazar los strings
//* 
//*     Tips:
//*         Replace Symbol
//*         F2
//* 


const wolverine = new Hero();
const ironman   = new Hero();
const spiderman = new Hero();

function greet() {
    return 'El SuperHero Wolverine es genial!';
}

function shout() {
    return 'El SuperHero en este string no se debe de cambiar';
}


console.log({ wolverine, ironman, spiderman, greet: greet(), shout: shout() });