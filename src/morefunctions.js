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



var version = "A1.9.0";
var vNickName = "Polar Bear";
var errorCount = "21";
var noticeCount = "4";
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
	"actionError",
	"actionScroll",
	"actionStopHere",
	// GET Category
	"getContent",
	"getMFstyles",
	"getTitle",
	// COOKIE category
	"setCookie",
	"getCookie",
	"cookie",
	"delCookie"
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
		throw 'MF: err 1: No number found';
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
		throw 'MF: err 2: No minimal amount found';
	}
	if (!isset(max)) {
		throw 'MF: err 3: No maximum amount found';
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
		throw 'MF: err 4: no number found';
	}
	if (!isset(num)) {
		throw 'MF: err 5: no power found';
	}
	
	// math rules
	if (power == 0) {
		return false;
		throw 'MF: err 6: math error (can\'t do ' + num + '^' + power + ' )';
	}
	if (num == 0) {
		return false;
		throw 'MF: err 7: math error (can\'t do ' + num + '^' + power + ' )';
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
		throw 'MF: err 8: count (amount) has not been set';
	}
	if(!isset(from)) {
		throw 'MF: err 9: from has not been set';
	}
	if(!isset(to)) {
		throw 'MF: err 10: to has not been set';
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
		throw 'MF: err 11: "' + from + '" is not valid!';
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
		var answer = count * 0.393700787;
		var ok = true;
	break;
	default:
		throw 'MF: err 12: "' + to + '" is not valid!';
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
		throw 'MF: err 13: Array is not set';
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
		throw 'MF: err 14: URL has not been set';
	} else {
	// CATCH MISTAKES in the URL
	function catchmistakes(url) {
			if (!isset(othersite)) {
			if (url.search("www.") !== -1) {
				var othersite = true;
				console.log('MF: NOTICE 1: www. was detected in "' + url + '", added http:// in front of the URL');
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
			console.log('NOTICE 2: "' + url + '" changed to http://' + url);
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
		throw 'MF: err 15: Log has not been set!';
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
		throw "MF: err 16: Error found! No further information";
	} else {
		if(prefix == false) {
			throw err;
		} else if (prefix == true) {
			throw 'MF: Error: ' + err;
		}
	}
}

/**
 * 
 * @param x
 * --> scrolling to x
 * @param y
 * --> scrolling to y
 * @returns
 * --> if the action was completed
 */
function actionScroll(x, y) {
	if (!isset(x)) {
		throw 'MF: err 17: x is not set';
		return false;
	} else if (!isset(y)) {
		throw 'MF: err 18: y is not set';
		return false;
	} else {
		window.scrollTo(x, y);
		return true;
	}
}
/**
 * WARNING!
 * WILL STOP EVERYTHING AFTER IT FROM LOADING
 * EVERYTHING ABOVE THIS FUNCTION WILL BE EXECUTED
 * examples:
 * 
 * # example 1
 * <script>
 * alert('Will I be executed?');
 * actionStopHere();
 * </script>
 * ---> Will execute alert('Will I be executed?');
 * 
 * # example 2
 * <script>
 * actionStopHere();
 * alert('Will I be executed?');
 * </script>
 * ---> Won't execute alert('Will I be executed?');
 * 
 * HTML under the actionStopHere() will not be displayed
 * # example 3
 * <h1>Hide and seek?<h1>
 * <script>
 * actionStopHere();
 * </script>
 * <h1>Do you see me?</h1>
 * ---> User will no see "Do you see me?", But will see "Hide and seek?".
 * 
 * @returns
 * --> nothing
 */

function actionStopHere() {
	window.stop();
}

/**
 * 
 * @param id
 * The id of the element you want information from
 * --> returns false if not set ( @code and an error )
 * @param output
 * The id of the output element
 * --> when not set the content of ID ( @code 'get' ) will be returned
 * @returns
 * --> returns false if @code id is not set
 * --> returns @code get (content of ID) if output is not set
 */
function getContent(id, output) {
	if (!isset(id)) {
		throw 'MF: err 19: Error: ID not called';
		return false;
	}
	var get = document.getElementById(id);
	if (isset(output)) {
		document.getElementById(output).innerHTML = get.innerHTML;	
	} else {
		return get;
	}
}

/**
 * 
 * @returns
 * --> true, because of success
 */
function getMFstyles() {
	    var x = document.createElement("STYLE");
	    var t = document.createTextNode("div.card {  width: 250px;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  text-align: center;}div.container {    padding: 10px;}/* Style The Dropdown Button */.dropbtn {    background-color: #4CAF50;    color: white;    padding: 16px;    font-size: 16px;    border: none;    cursor: pointer;}/* The container <div> - needed to position the dropdown content */.dropdown {    position: relative;    display: inline-block;}/* Dropdown Content (Hidden by Default) */.dropdown-content {    display: none;    position: absolute;    background-color: #f9f9f9;    min-width: 160px;    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);    z-index: 1;}/* Links inside the dropdown */.dropdown-content a {    color: black;    padding: 12px 16px;    text-decoration: none;    display: block;}/* Change color of dropdown links on hover */.dropdown-content a:hover {background-color: #f1f1f1}/* Show the dropdown menu on hover */.dropdown:hover .dropdown-content {    display: block;}/* Change the background color of the dropdown button when the dropdown content is shown */.dropdown:hover .dropbtn {    background-color: #3e8e41;}p.center {text-align: center; }p.left {text-align: left; }p.right {text-align: right; }h1.title {text-align: center;font-size: 48px;}body {font-size: 13px;}div.green-box {border: 3px solid green;}div.red-box {border: 3px solid red; }div.darkred-box {border: 3px solid DarkRed;}div.orange-box {border: 3px solid orange;}div.card {  width: 250px;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  text-align: center;}div.container {    padding: 10px;}");
	    x.appendChild(t);
	    document.head.appendChild(x);
	    return true;
}

/**
 * 
 * @returns the title (<title>TITLE</title>)
 */
function getTitle() {
	return document.title;
}

/**
 * 
 * @param cname
 * --> The name of the cookie
 * @param cvalue
 * --> The value of the cookie
 * @param exdays
 * --> Days before expires
 * --> Can be set permanent by setting exdays to 'permanent or perm'
 * @returns
 */
function setCookie(cname, cvalue, exdays) {
	if (exdays == 'permanent' || exdays == 'PERMANENT' || exdays == 'perm' || exdays == 'PERM' || !isset(exdays)) {
		var exdays = 10 * 365.25; 
	}
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); // from miliseconds to days (24 * 60 * 60 * 1000)
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** 
 * @param cname
 * --> the name of the cookie
 * @returns
 * --> cookie content
 */

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * 
 * @param cookie 
 * --> Cals a cookie
 * @returns
 * --> 'undefined' when the cookie doesn't exist ( so now it can be used with @function isset() )
 * --> @code theCookie, the content of the cookie
 */
function cookie(cookie) {
	var theCookie = getCookie(cookie);
	if (!theCookie != "") {
		// so it can be used with isset
		return 'undefined';
	} else {
		return theCookie;
	} 
}

/**
 * 
 * @param cookie
 * --> which cookie has to be deleted?
 * @returns
 * --> true if cookie has been deleted
 * --> returns false and an error after 3 times retrying
 */

function delCookie(cookie) {
	if (!isset(cookie(cookie))) {
		console.log('MF: NOTICE 3: COOKIE: "' + cookie + '" was not set');
		throw 'MF: err 20: Cookie not set';

	} else {
		// (re)setting a cookie to let it expire
		document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Setting the cookie's expire date to 01/01/1970 00:00:00
	
			// if the cookie isn't set anymore
		if (!isset(cookie(cookie))) {
			return true;
		} else {
			// retry 3 times
			while (x > 3 && isset(cookie(cookie))) {
				x++;
				document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Setting the cookie's expire date to 01/01/1970 00:00:00
			}
			if (isset(cookie(cookie))) {
				return false;
				throw 'MF: err 21: Something went horribly wrong';

			} else {
				return true;
				console.log('MF: NOTICE 4: It took a little bit longer to delete COOKIE: "' + cookie + '"');
			}
	
		}
	}
}
