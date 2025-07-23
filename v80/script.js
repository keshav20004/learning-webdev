// let obj={
//     a:1,
//     b:"keshav"
// }
// console.log(obj)
// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }
    eats(){
        console.log("kha rha hu roar")
    }
    jumps(){
        console.log("kood rha hu bhai")
    }
}
class Lion extends Animal{
    constructor(name){
        super()
        this.name=name
        console.log("object is created and he is a lion")
    }

}

let l=new Lion("shera")
console.log(l)


let a=new Animal("Bunny");
console.log(a)




















