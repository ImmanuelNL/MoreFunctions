# MoreFunctions
Make it easier and faster to code using MoreFunctions!

### How to use
Add this line in the Head section (before the `</head>`-tag and after the `<head>`-tag)

`<script type="text/javascript" src="https://immanuelnl.github.io/MoreFunctions/morefunctions.js"></script>`
## Our goal
Our goal is to create a plugin that supports *JavaScript* and *PHP*.
We do this by
 1) Shortening already existing functions
 
 ***Example 1***
 
 *Instead of*
 
 `var get = document.getElementById('myInput');
 document.getElementById('myOutput').innerHTML = get.innerHTML;`
 
 *You do*
 
 `getContent('myInput', 'myOuput');`
 
 2) Making it easier to do get information or to convert it
 
 ***Example 2***
 
 *What is the user's language*
 
 `userLang()`
 
 *Could be*
 
 `en-US (American English)` or `nl-NL (Dutch (Netherlands))` or `es (Spanish (Spain))`

3) Math solving

***Example 3***

*What is 16^4?*

`tothepower(16, 4);`

*Answer*

`65536`

4) Everything together

 *Let's use it!*

`function usingMoreFunctions() {`

`var str = userLang();`

`if (str.search('en') == -1) {`

`var useCM = true;`

`} else {`

`var useCM = false;`

`}`

`if (useCM == true) {`

`var inpCM = prompt('How tall are you (in CM)');`

`} else {`

`var inpINCH = prompt('How tall are you (in INCH)');`

`}`

`if (isset(inpCM)) {`

`var ans = convert(inpCM, 'cm', 'inch');`

`var ans = ans.replace(".", ","); // replacing '.' with ','`

`var ans2 = convert(inpCM, 'cm', 'm');`

`var ans2 = ans2.replace(".", ","); // replacing '.' with ','`

`alert("You're " + ans + " inch long that's " + ans2 + " meter long");`

`} else if (isset(inpINCH)) {`

`var ans = convert(inpINCH, 'inch', 'cm');`

`var ans2 = convert(inpCM, 'inch', 'm');`

`alert("You're " + ans + " cm long that's " + ans2 + " meter long");`

`}`

`return true;`

`}`

