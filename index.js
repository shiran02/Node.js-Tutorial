//require("./batMan");
//require("./superMan");


//..............................................................

///const superHero = require("./sper-hero");
//const newSuperHero = require("./sper-hero");

 //console.log(superHero.getName());
// superHero.setName("superMan");
//console.log(superHero.getName());
//console.log(newSuperHero.getName());



//...............................................................


//const detals = require("./Detail");

// console.log(detals.setName("shiran"));
// console.log(detals.setAge(23));


//console.log(detals.getName());
//console.log(detals.getAge());

const SuperHero = require("./sper-hero");

const batMan = new SuperHero("bat man");
console.log(batMan.getName());

const superMan = new SuperHero("super man");
console.log(superMan.getName());