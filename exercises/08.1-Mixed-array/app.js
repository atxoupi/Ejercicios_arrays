var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newarray=[];
for(let i=0; i<mix.length;i++){
    newarray.push(typeof(mix[i]));
}
console.log(newarray);