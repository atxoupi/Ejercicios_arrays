let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

function mergeTwoList(arr){
    let even=[];
    let odd=[];
    for(i=0; i<arr.length;i++){
        if(arr[i]%2===0) even.push(arr[i]);
        else odd.push(arr[i]);
    }
    
    even.forEach(element=> odd.push(element));
    return odd;
}


    


console.log(mergeTwoList(list_of_numbers))
