class Detail{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }

    getAge(){
        return this.age;
    }
}

//module.exports = new Detail("SHIRAN",23);
module.exports = Detail;