# MoreFunctions # 
Make it easier and faster to code using MoreFunctions!

## How to use
Add this line in the Head section (before the `</head>`-tag and after the `<head>`-tag)

### Release 1.0.0 (Amur Tiger)
![Amur Tiger]( https://github.com/ImmanuelNL/MoreFunctions/raw/master/docs/Amur-Tiger.jpg "Amur Tiger R1.0.0")
```html
<script type="text/javascript" src="https://github.com/ImmanuelNL/MoreFunctions/releases/download/R1/morefunctions.js"></script>
```
### Alpha stages (Polar Bear)
![Polar Bear]( https://github.com/ImmanuelNL/MoreFunctions/raw/master/docs/Polar-Bear.jpg "Polar Bear latest alpha")
```html
<script type="text/javascript" src="https://github.com/ImmanuelNL/MoreFunctions/releases/download/A1.9.0/morefunctions.js"></script>
```
## Our goal
Our goal is to create a plugin that supports *JavaScript* and *PHP*.
We do this by
 1) Shortening already existing functions
 
 ***Example 1***

 ____________________
 *Instead of*
 
 ```javascript
 var get = document.getElementById('myInput');
 document.getElementById('myOutput').innerHTML = get.innerHTML;
 ```
 
 *You do*
 
 ```javascript
 getContent('myInput', 'myOuput');
 ```
 
 2) Making it easier to do get information or to convert it
 
 ***Example 2***
 ____________________
 *What is the user's language*
 
 ```javascript
 userLang();
 ```
 
 *Could be*
 
 `en-US (American English)` or `nl-NL (Dutch (Netherlands))` or `es (Spanish (Spain))`

3) Math solving

***Example 3***
______________________

*What is 16^4?*

```javascript
tothepower(16, 4);
```

*Answer*

```javascript
65536
```

4) Everything together
______________________
 *Let's use it!*

```javascript
// Convert to the opposit (When EN to CM else to INCH)
function usingMoreFunctions() {
var str = userLang();
var b = str.search(/en/i);
if (b == -1) {
var useCM = true;
} else {
var useCM = false;
}
if (useCM == true) {
var inpCM = prompt('How tall are you (in CM)');
} else {
var inpINCH = prompt('How tall are you (in INCH)');
}
if (isset(inpCM)) {
var ans = convert(inpCM, 'cm', 'inch');
var ans2 = convert(inpCM, 'cm', 'm');
alert("You're " + ans + " inch long that's " + ans2 + " meter");
} else if (isset(inpINCH)) {
var ans = convert(inpINCH, 'inch', 'cm');
var ans2 = convert(inpCM, 'inch', 'm');
alert("You're " + ans + " cm long that's " + ans2 + " meter");
}
alert('The following functions where used \n\n\tuserLang \n\t\tWhy? \n\t\t\tTo see which measurement system you use\n\tisset \n\t\tWhy? \n\t\t\tTo see what was set\n\tconvert \n\t\tWhy? \n\t\t\tTo convert inch to centimeter (or centimeter to inch) and inch/centimeter to meter\n');
return true;
}
```
> Keep coding :page_with_curl:

