/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction() {
    var useless = null;

    return useless;
}

//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
bar = function (doubleArray) {

    for (var i = 0; i < doubleArray.length; i++) {
        if (isNaN(doubleArray[i])) {
           return false;
        }
        else {
           doubleArray[i] = doubleArray[i] * 2;
        }
    }

    return true;
}
//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray) {
   var GitLogArray = [];
   GitLogArray.length = 0;

   for (var j = 0; j < logArray.length; j++) {
       var hash = logArray[j].slice(0, logArray[j].indexOf(" "));
       var date = logArray[j].slice(logArray[j].indexOf(" "), logArray[j].indexOf('"'));
       var message = logArray[j].slice(logArray[j].indexOf('"') + 1, logArray[j].lastIndexOf('"'));

      GitLogArray.length++;
      GitLogArray[j] = new GitLog(hash, new Date(date), message);
   }

   return GitLogArray;  
}
//end your code
