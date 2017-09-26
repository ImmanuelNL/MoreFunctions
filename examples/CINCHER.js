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
alert('The following functions where used \n\n\tuserLang \n\t\tWhy? \n\t\t\tTo see which measurement system you use\n\tisset \n\t\tWhy? \n\t\t\tTo see what was set\n\tconvert \n\t\tWhy? \n\t\t\tTo convert inch to centimeter (or centimetre to inch) and inch/centimetre to meter\n');
return true;
}
