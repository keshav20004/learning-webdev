async function sleep() {
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(45)

        },1000);

    })
    (async function main() {
        let a=await sleep()
        console.log(a)
        let b=await sleep()
        console.log(b);
        
    })
    let a=await sleep()
    let b=await sleep
    
}
//DESTRUCTING
let[x,y, ...rest]=[1,4,2,4,2,4,32]
console.log(x,y,rest)

let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj
console.log(a,b)
const sum = (...args) => args.reduce((a, b) => a + b, 0);


let arr=[1,3,442,42,1]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))



