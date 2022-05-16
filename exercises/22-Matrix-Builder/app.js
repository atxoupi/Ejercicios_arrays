// Code goes here
function matrixBuilder(num){
    let arr=[];
    for (let i=0;i<num;i++){
        arr.push([]);
        for(let t=0;t<num;t++){
            arr[i].push(Math.floor(Math.random()*2));
        }
    }
    return arr;
}


// do not change anything from this line down
console.log(matrixBuilder(5))