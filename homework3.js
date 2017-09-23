


//A function called fullName that takes as argument first name and last name and returns the full name of the person 
//(first name concatenated with last name with a space in between)

const fullName = function(first, last) {

	return first + " " + last;

};


//A function that takes no arguments and returns something

const color = function() {

	return "red";
};



//A function that takes arguments, does something but does not return anything

const combinedAge = function(age1, age2, age3) {

const result = age1 + age2 + age3;

};


//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const func = function(x, y) {

	if (x===y) {

		return 0;
	};

	if (x>y) {

		return 1;
	};

	if (y>x) {

		return -1;
	};
};


//A function that takes at least three arguments and returns the result of some set of operations using those arguments

const intervalWidth = function(HighestValue, LowestValue, NumberOfClasses) {

	return (HighestValue - LowestValue) / NumberOfClasses;

};


//A function that takes three strings and returns the string that is the longest

const longestString = function(s1, s2, s3) {

	if (((s1.length) > (s2.length)) && ((s1.length) > (s3.length))) {

		return s1;

	} else if (((s2.length) > (s1.length)) && ((s2.length) > (s3.length))) {

		return s2;

	} else if (((s3.length) > (s1.length)) && ((s3.length) > (s2.length))) {

		return s3;
	};

};
  


//A function that takes three inputs and returns the first truethy value

const perviyTruethy = function(x, y, z) {

	return x || y || z;

};


