// Question 1
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;
	}
}
maxOfTwoNumbers(2, 6);

// Question 2
function maxOfThree(num1, num2, num3) {
	if (num1 > num2&& num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}
maxOfThree(6,123,3);

// Question 3
function isCharacterAVowel(num) {
	var vowels = ['a','e','i','o','u'];
	if (vowels.indexOf(num) !== -1) {
		return "true";
	} else {
		return "false";
	}
}
isCharacterAVowel('a');
isCharacterAVowel('b');

// Question 4
var myArray = [1,2,3,4,5];
function sumArray(ary) {
	var sum = 0;
	for (var i = 0; i < ary.length; i++) {
		sum = sum + ary[i];
	}
	return sum;
}
sumArray(myArray);

function multiplyArray(ary) {
	var mult = ary[0];
	for(var i = 0; i < ary.length; i++) {
		mult = mult*ary[i];
	}
	return mult;
}
multiplyArray(myArray);

// Question 5
function numberOfArguments (){
	return arguments.length;
}
numberOfArguments(1,2,3,5,6,43);

// Question 6
function reverseString(str){
	var arrayOfString = str.split('');
	var revArray = arrayOfString.reverse();
	return arrayOfString.join();
}
reverseString("Greg");

// Question 7
myArray = ['this','is','longest'];

function findLongestWord (ary) {
	//run each index of the array
	//check the .length
	//if the length is longer than longest so far
	//if so, set as new longest
	//otherwise, do nothing
	var longest = 0;
	for (i =0; i < ary.length; i++){
		if (ary[i].length > longest) {
			longest = ary[i].length;
		}	
	} 
	return longest;
}
findLongestWord(myArray);


// Question 8
myArray = ['a','is','ass','coat','annex'];

function filterLongWords (ary, num) {
	//run each index of the array
	//check if longer than length number
	//if so, push to new array
	newArray = [];
	for (i = 0; i < ary.length; i++){
		if (ary[i].length > num) {
			newArray.push(ary[i]);
		}
	}
	return newArray;
}
filterLongWords(myArray, 1);


// Bonus 1
function charactersOccurencesCount() {
  
}

