let a=prompt("enter 1st number")
let b=prompt("enter 2nd number")
if(isNaN(a)|| isNaN(b))
    throw SyntaxError("this is not allowed bro")
let sum=parseInt(a)+parseInt(b)




try {
    console.log("the sum is",sum*x)
    
} catch (error) {
    console.log("error aa gya bhai ")
    
}
finally{
    console.log("database is closed now")
}