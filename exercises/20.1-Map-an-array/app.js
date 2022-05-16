var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	value=(value*1.8)+32;
	return value;
	
});

console.log(arrayOfFahrenheitValues);