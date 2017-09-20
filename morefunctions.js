/**
 * MoreFunctions
 * By: Immanuel Bendahan
 * 
 * All Rights Reserved
 * 
 * DO NOT EDIT THIS FILE!!
 * 
 * Version Polar Bear
 * 
 * Still In Alpha Stages
 */



var version = "A1.7.3";
var vNickName = "Polar Bear";
var included = [
	// NO CATEGORY
	"isset",
	// Mathematical Category
	"squareroot",
	"minmax",
	"tothepower",
	"convert",
	// NO CATEGORY
	"getMoreFunctions",
	"isArray",
	"startClock",
	// User Category
	"userVersion",
	"userOS",
	"userLang",
	"userJavaOn",
	"userOnline",
	// Web Category
	"WebHostName",
	"webUrl",
	"webPath",
	"webIsProtected",
	// ACTIONS Category
	"actionRedirect",
	"actionLog",
	"actionError"
];




/**
 * ISSET
 * checks if a variable is set
 * EXAMPLE
 * foo is set:
 * 
 * var foo = 'Hai';
 * if(isset(foo)) {
 * alert(foo);
 * } else {
 * alert('not set')
 * }
 * 
 * boo is not set:
 * 
 * if(isset(boo)) {
 * alert(boo);
 * } else {
 * alert('not set')
 * }
 * 
 */

function isset(object) {
    return (typeof object !=='undefined');
}

/**
 * squareroot 
 * returns the square root of a number
 * example:
 * 
 * var answer = squareroot(4);
 * 
 * answer is 16
 */

function squareroot(num) {
	if (!isset(num)) {
		throw 'No number found';
	}
	var answer = Math.sqrt(num);
	return answer;
}

/**
 * minmax
 * random number between min and max
 * var answer = minmax(1, 10);
 * answer could be: 8 or (1 2 3 4 5 6 7 9 10)
 */

function minmax(min, max) {
	if (!isset(min)) {
		throw 'No minimal amount found';
	}
	if (!isset(max)) {
		throw 'No maximum amount found';
	}
	Math.floor((Math.random() * max) + min);
}

/**
 * tothepower
 * To the power of ...
 * Example:
 * 
 * tothepower(10, 3);
 * answer = 1000
 */

function tothepower(num, power) {
	
	if (!isset(num)) {
		throw 'no number found';
	}
	if (!isset(num)) {
		throw 'no power found';
	}
	
	// math rules
	if (power == 0) {
		return false;
	}
	if (num == 0) {
		return false;
	}
	
	var savenum1 = num;
	while (power > 0) {
		power--;
		if (!isset(num2)) {
			// TO PREVENT THE EXTRA POWER
			power--;
			var num2 = num * num;
		} else {
			var num2 = num2 * num;
		}
		
	}
	return num2;
}

/**
 * 
 * @param count
 * what is the count of your conversion (ex. 1000)
 * @param from
 * from what are you going to convert (ex. m)
 * allowed: mm, cm, dm, m, dam, hm, km, inch
 * @param to
 * where are you going to convert @param count in? (ex. km)
 * @returns
 * returns the answer (ex. 1) only when nothing went wrong (is "ok" true?)
 * 
 * 
 */

function convert(count, from, to) {
	if(!isset(count)) {
		throw 'count (amount) has not been set';
	}
	if(!isset(from)) {
		throw 'from has not been set';
	}
	if(!isset(to)) {
		throw 'to has not been set';
	}
	// mm, cm, dm, m, dam, hm, km, inch
	var ok = false;
	// MAKE THEM ALL METERS
	switch (from) {
	case 'mm':
		var dealwiththis = count / 1000;
		var ok = true;
	break;
	case 'cm':
		var dealwiththis = count / 100;
		var ok = true;
	break;
	case 'dm':
		var dealwiththis = count / 10;
		var ok = true;
	break;
	case 'm':
		var dealwiththis = count;
		var ok = true;
	break;
	case 'dam':
		var dealwiththis = count * 10;
		var ok = true;
	break;
	case 'hm':
		var dealwiththis = count * 100;
		var ok = true;
	break;
	case 'km':
		var dealwiththis = count * 1000;
		var ok = true;
	break;
	case 'inch':
		var dealwiththis = count/39.370;
		var ok = true;
	break;
	default:
		throw '"' + from + '" is not valid!';
		var ok = false;
	break;
	}
	// ALL TO THERE 'TO'
	if (ok == true) { // BUT FIRST CHECK IF SOMETHING WENT WRONG
	switch (to) {
	case 'mm':
		var answer = dealwiththis * 1000;
		var ok = true;
	break;
	case 'cm':
		var answer = dealwiththis * 100;
		var ok = true;
	break;
	case 'dm':
		var answer = dealwiththis * 10;
		var ok = true;
	break;
	case 'm':
		var answer = dealwiththis;
		var ok = true;
	break;
	case 'dam':
		var answer = dealwiththis / 10;
		var ok = true;
	break;
	case 'hm':
		var answer = dealwiththis / 100;
		var ok = true;
	break;
	case 'km':
		var answer = dealwiththis / 1000;
		var ok = true;
	break;
	case 'inch':
		var answer = count*39.370;
	break;
	default:
		throw '"' + to + '" is not valid!';
		var ok = false;
	break;
	}
	}
	if (ok == true) {
		return answer;
	}
	
}

/**
 * 
 * @param type which type of output do you want?
 * Popup, Html or text
 * @code the "defaulttype" variable is used to set the default type used (default = text)
 * 
 * @returns
 * the version in the selected option
 */

function getMoreFunctions(type) {
	var i;
	
	var defaulttype = 'text';
	var text;
	
	switch (type) {
	case 'html':
		for (i = 0; i < included.length; i++) { 
		    text += included[i] + "<br>";
		}
		return text;
	break;
	case 'popup':
		for (i = 0; i < included.length; i++) { 
		    text += included[i] + "\n";
		}
		alert(text);
	break;
	case 'text':
		for (i = 0; i < included.length; i++) { 
		    text += included[i] + " ";
		}
	break;
	default:
		
		// CHOOSE DEFAULT
		
		switch (defaulttype) {
		case 'html':
			for (i = 0; i < included.length; i++) { 
			    text += included[i] + "<br>";
			}
			return text;
		break;
		case 'popup':
			for (i = 0; i < included.length; i++) { 
			    text += included[i] + "\n";
			}
			alert(text);
		break;
		case 'text':
			for (i = 0; i < included.length; i++) { 
			    text += included[i] + " ";
			}
		}
	
	break;
	}
}

/**
 * @use
 * @1 is it an array
 * 
 * if (isArray(myArray)) {
 * alert('true');
 * } else {
 * alert('false');
 * }
 * 
 * @2 is it not an array
 * if (!isArray(myArray)) {
 * alert('true');
 * } else {
 * alert('false');
 * }
 * 
 * @3 is it an array via a variable
 * var checkarray = isArray(myArray);
 * if (checkarray == true) {
 * alert('true')
 * } else {
 * alert('false')
 * }
 * 
 * @4 is it not an array via a variable
 *  * var checkarray = isArray(myArray);
 * if (checkarray == false) {
 * alert('true')
 * } else {
 * alert('false')
 * }
 * 
 *
 * @param array
 * Here you have to enter the array (ex. myArray)
 * @returns
 * returns true when the var is an array and returns false 
 * when it's not an array
 * 
 * @throw array is not set
 */

function isArray(array) {
	if (isset(array)) {
	if (array instanceof Array) {
			return true;
		} else {
			return false;
		}
	} else {
		throw 'Array is not set';
	}
}


/**
 * 
 * @returns time
 */
function startClock() {
	function startTime() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    m = checkTime(m);
	    s = checkTime(s);
	    return h + ":" + m + ":" + s;
	    var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
	    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	    return i;
	}
	var time = startTime();
	return time;
}

// USER CATEGORY
/**
 * 
 * @returns the version information of the browser
 */
function userVersion() {
	return navigator.appVersion;
}

/**
 * 
 * @returns User's OS (ex. Windows or MacIntel)
 */

function userOS() {
	return navigator.platform;
}

/**
 * 
 * @returns user's language (ex. nl-NL or )
 */
function userLang() {
	return navigator.language;
}

/**
 * 
 * @returns if user has java enabled
 */
function userJavaOn() {
	return navigator.javaEnabled();
}

/**
 * 
 * @returns if the user's browser is online (being used)
 * Yes?
 * --> true
 * No?
 * --> false
 */
function userOnline() {
	return navigator.onLine;
}

// WEB AND URL CATEGORY

/**
 * 
 * @returns the hostname (ex. www.example.com)
 */
function webHostName() {
	return window.location.hostname;	
}

/**
 * 
 * @returns the full URL (ex. http://www.example.com/example/dir/ex.html)
 */
function webUrl() {
	return window.location.href;
}

/**
 * 
 * @returns the full path (ex. /example/dir/ex.html)
 */

function webPath() {
	return window.location.pathname;
}

/**
 * 
 * @returns is the web adres a https (protected url)
 * --> true
 * else
 * --> false
 */
function webIsProtected() {
	if (window.location.protocol == 'https') {
		return true;
	} else {
		return false;
	}
}

function actionRedirect(url, othersite) {
	// IS THE URL SET
	if(!isset(url)) {
		throw 'URL has not been set';
	} else {
	// CATCH MISTAKES in the URL
	function catchmistakes(url) {
			if (!isset(othersite)) {
			if (url.search("www.") !== -1) {
				var othersite = true;
				throw 'www. was detected in "' + url + '", added http:// in front of the URL';
			} else {
				var othersite = false;
			}
		}
	}
	catchmistakes(url);
	if (isset(othersite) && othersite == true) {
		// check if hasn't http(s)
		if(url.search("http") == -1)  {
			var url = 'http://' + url;
			console.log('"' + url + '" changed to http://' + url);
		}	
	}
	// REDIRECT
	window.location.assign(url);
	}
}
/**
 * Send a message to the console
 */
function actionLog(log) {
	if (!isset(log)) {
		throw 'Log has not been set!'
	} else {
		console.log(log);
	}
}
/**
 * 
 * @param err
 * the error message
 * What if the err is not set?
 * --> then the error will be: "Error found! No further information"
 * @param prefix
 * do you want "Error:" before you error?
 * Yes?
 * --> Your error will be: "Error: " + error
 * No?
 * --> Your error will be: error
 * @returns nothing (ok an error)
 */
function actionError(err, prefix) {
	if (!isset(prefix)) {
		var prefix = false;
	} else if (prefix == true) {
		var prefix = true;
	} else {
		var prefix = false;
	}
	if (!isset(err)) {
		throw "Error found! No further information";
	} else {
		if(prefix == false) {
			throw err;
		} else if (prefix == true) {
			throw 'Error: ' + err;
		}
	}
}
