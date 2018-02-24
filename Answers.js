
///Chapter 1 Fundamentals page 16
//setting and swapping
var myNumber = 42;
var myName = 'Javier Gonzalez';
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myName);
console.log(myNumber);


//Print -52 to 1066
var arr = [];
for(var i = -52; i<1067; i++){
	arr.push(i);
}
console.log(arr)

//Dont Worry, Be Happy
function beCheerful(){
	for(var i = 1; i<99; i++){
		console.log('good morning!');
	}
}

//Multiples of Three - but Not All
function multiplesof3(){
	var arr = [];
	for(var i = -300; i<0; i++){
		if(i == -3){
			continue
		}
		if(i == -6){
			continue
		}
		if(i%3 === 0){
			arr.push(i);
		}
	}
	console.log(arr);
}

//printing integers with While
function printWhile(){
	var x = 2000;
	while(x<5281){
		console.log(x);
		x++;
	}
}
//You say its your birthday
function birthday(x,y){
	var month = x;
	var day = y;
	if(x == 5 & y == 28){
		console.log('How did you know?')
	}
	else console.log('Just another day....');
}

//Leap Year
function leapyear(x){
	var year = x;
	if(x % 4 === 0 && x % 100 !==0 || x % 400 === 0){
		console.log(year +' leap year')
	}
	else console.log(year + ' not leap year')
}

//Print and Count
var arr = [];
var count = 0;
for(var i = 512; i<4096; i++){
	if(i % 5 ===0){
		arr.push(i);
		count ++;
	}
}
console.log(arr);
console.log(count);

//Multiples of Six
var x = 6;
while(x<60001){
	if(x % 6 === 0){
		console.log(x);
	}
	x++;
}

//Counting, the Dojo Way
for(var i = 1; i<101; i++){
	if(i % 5 === 0){
		console.log('Coding')
	}
	if(i == 10){
		console.log('Dojo')
	}
	else console.log(i);
}

//What do you know?
function whatdoyouknow(x){
	if(x == "incoming"){
		console.log(x);
	}

//Whoa, That Sucker's Huge
var sum = 0;
for(var i = -300000; i<300000; i++){
	if(i % 2 !== 0){
		sum += i;
	}
}
console.log(sum);

//Countdown by Fours
var x = 2016;
while(x>0){
	if(x<=0){
		break;
	}
	if(x % 4 ===0){
		console.log(x);
	}
	x--;
}

//Flexible Countdown
function countdown(lowNum,highNum,mult){
	var arr = [];
	var high = highNum;
	var low = lowNum;
	for(var i = high; i>=low; i--){
		if(i % mult === 0){
			arr.push(i);
		}
		if(i == low){
			break;
		}
	}
	console.log(arr);
}

//Final Countdown
function flexiblecountdown(param1,param2,param3,param4){ //x = mult, y = arr[0], z = arr[arr.length-1], if arr(y)= i skip
	var arr = [];
	var x = param1;
	var y = param2;
	var z = param3;
	var i = param4;
	while(z>y){
		if(y % x === 0 && y!=i){
			arr.push(y);
		}
		if(y == z){
			break;
		}
		y++;
	}
	console.log(arr);
}


// Page 20

//Countdown
function countdown(x){
	var arr = [];
	for(var i = x; i>=0; i--){
		arr.push(i);
	}
	return arr; 
}

//Print and Return
function printreturn(x,y){
	var arr = [x,y];
	for(var i = 0; i<arr.length; i++){
		if(i == 0){
			console.log(arr[0]);
		}
	}
	return arr[1];
}

//First Plus Length
function firstpluslength(arr){
	var sum = arr[0] + arr.length
	return sum;
	}

//Values Greater than Second
function greaterthansecond(){
	var arr = [1,3,5,7,9,13];
	var count = 0;
	for(var i = 1; i<14; i++){
		if(arr[i] > arr[1]){
			console.log(arr[i]);
			count++;
		}
	}
	return count;
}

//Values Greater than Second, Generalized
function generalized(arr){
	var arrnew = [];
	var count = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i] > arr[1]){
			arrnew.push(arr[i]);
			count++;
		}
	}
	console.log(count);
	return arrnew;
}

//This Length, That Value
function lengthvalue(num1,num2){
	arr = [];
	for(var i = num1; i>0; i--){
		if(num1 == num2){
			console.log('Jinx!')
		}
		arr.push(num2)
	}
	return arr;
}

//Fit the First Value
function fitfirstvalue(arr){
	if(arr[0] > arr.length){
		console.log('Too big!')
	}
	if(arr[0] < arr.length){
		console.log('Too small')
	}
	if(arr[0] == arr.length){
		console.log('Just right!')
	}
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
	var x = fDegrees;
	var Celsius = (x - 32)/(9/5);
	return Celsius;
}

//Celsius to Fahrenheit
function celsiustofahrenheit(cDegrees){
	var x = cDegrees;
	var Fahrenheit = (9/5 * x) + 32;
	return Fahrenheit;
}
///Fundamentals Page 22

//Biggie Size
function biggiesize(arr){
	var arrbig = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] > 0){
			arrbig.push("big")
		}
		else arrbig.push(arr[i]);
	}
	return arrbig;
}

//Print Low, Return High
function lowhigh(arr){
	var low = arr[0];
	var high = arr[0];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] >= high){
			high = arr[i]
		}
		if(arr[i] <= low){
			low = arr[i]
		}
	}
	console.log(low);
	return high;
}

//Print One, Return Another
function print1returnanother(arr){
	var firstodd = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i] % 2 !== 0){
			firstodd = arr[i]
		}
	}
	console.log(arr[arr.length-2]);
	return firstodd;
}

//Double Vision
function doublevision(arr){
	var double = [];
	for(var i =0; i<arr.length; i++){
		double.push(arr[i] = arr[i] * arr[i])
	}
	return double;
}

//Count Positives
function countPositives(arr){
	var Positives = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i] > 0){
			Positives ++;
		}
	}
	arr.pop();
	arr.push(Positives);
	return arr;
}

//Evens and Odds
function evensodds(arr){
	var arrnew = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
			console.log("That's odd!")
		}
		if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
			console.log("Even more so!")
		}
	}
}

//Increment the Seconds
function incrementseconds(arr){
	for(var i = 0; i<arr.length; i++){
		if(arr[i] % 2 !== 0){
			arr[i] = arr[i] + 1
		}
		console.log(arr[i]);
	}
	return arr;
}

//Previous Lengths
function previous(arr){
	var string = arr[0];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] % 1 !== 0){
			string = arr[i];
			arr[i] = string.length;
		}
	}
	return arr;
}

//Add Seven to Most
function addseventomost(arr){
	var arrnew = [];
	for(var i = 1; i<arr.length; i++){
		arrnew.push(arr[i]+7)
	}
	return arrnew;
}

//Reverse Array
function reverse(arr){
	var arrnew = [];
	for(var i = arr.length -1; i>=0; i--){
		arrnew.push(arr[i]);
	}
	return arrnew;
}

//Outlook: Negative
function outlookNegative(arr){
	var negative = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] < 0) {
		negative.push(arr[i]);
		}
		else negative.push(-arr[i]);
	}
	return negative;
}

//Always Hungry
function hungry(arr){
	var count = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i] == "food"){
			console.log("yummy");
			count ++;
		}
	}
	if(count = 0){
		console.log("I'm hungry")
	}
}

//Swap Toward the Center
function swaptocenter(arr){
	var temp = 0;
	var temp1 = 0;
	temp = arr[arr.length - 1];
	arr[arr.length - 1] = arr[0];
	arr[0] = temp;
		if(i = 2){
			temp1 = arr[arr.length - 3];
			arr[arr.length - 3] = arr[2];
			arr[2] = temp1;
		}
	return arr;
}

//Scale the Array
function scalearray(arr,num){
	for(var i = 0; i<arr.length; i++){
		arr[i] = arr[i] * num;
	}
	return arr;
}