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

//......................................................................

// const SuperHero = require("./sper-hero");

// const batMan = new SuperHero("bat man");
// console.log(batMan.getName());

// const superMan = new SuperHero("super man");
// console.log(superMan.getName());

//.................................................git push -u origin main



//forth pattern .................................
// const math = require("./math")

// const {add , subtrack} = math;

// console.log(add(2,3));
// console.log(subtrack(2,3));

//json files ............................................................

/*
const data = require("./data.json");

// console.log(data);
console.log(data.name);
console.log(data.address.street);
console.log(data.address.city);

*/



//.......file path ...........................................

/*
const path = require("node:path");

console.log(__filename);
console.log(__dirname);


console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));


console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));


console.log(path.isAbsolute(__filename));


console.log(path.join("folder1","folder2","index.html"));

*/

//.................................................................



function greet(name){
    console.log(`Hello ${name}`);
}


function greetVishwas(greetFn){
    const name = "shiran kumarasingha";
    greetFn(name);
}

greetVishwas(greet);


//............



function detail(name){
    console.log(name);
}


function higherOrderFunation(callback){
    const name = "shiran kumarasingha";
    callback(name);

}

higherOrderFunation(detail);

