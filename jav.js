
function printSum(){
    let ar = [1,2,3]
    let totalSum = 0;
}


//Alice and Bob
let alice=[1,2,3]
let bob=[4,5,6]
function comparePoint(){
    let totalPoints=[]
    let aPoints=0;
    let bPoints=0;
    if(alice[0]>bob[0]){
        aPoints++
    }else if(alice[0]<bob[0]){
        bPoints++
    }
    if(alice[1]>bob[1]){
        aPoints++
    }else if(alice[1]<bob[1]){
        bPoints++
    }
    if(alice[2]>bob[2]){
        aPoints++
    }else if(alice[2]<bob[2]){
        bPoints++
    }
    totalPoints.push(aPoints)
    totalPoints.push(bPoints)
    console.log(totalPoints)
}
comparePoint()

//array of integers
let arrayNum=[2,-4,0]
function plusMinus(arr) {
    let numA = 0;
    let numB = 0;
    let numC = 0;
    for(let i=0; i<arrayNum.length; i++){
        if(arrayNum[i]>0){
            numA++
        }
        if(arrayNum[i]<0){
            numB++
        }
        if(arrayNum[i]===0){
            numC++
        }
    }
console.log(parseFloat(numA/arrayNum.length))
console.log(parseFloat(numB/arrayNum.length))
console.log(parseFloat(numC/arrayNum.length))
}
plusMinus()

//create function with first function
function firstFunction(a,b){
    let total= a+b
    return total;
}
console.log(firstFunction(1,2))