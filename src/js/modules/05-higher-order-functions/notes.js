// The documentation refers to this example
// and mentions the use of destructuring.
// What exactly is happening is not documented,
// so here are some notes on that.

/**
 *  SCRIPTS is an array of objects.
 * Each object (script) has a property 'ranges' which is an array of arrays.
 * The inner arrays are ranges specifying a start and end unicode value 
 * (e.g. ranges: [[994, 1008], [11392, 11508]])
 * 
 * The characterCount function:
 * Takes a script as the param (a single object from the array of scripts)
 * The ranges array then has the reduced method applied to it.
 * count is the accumulated value, and starts at 0.
 * [from, to] is the destructuring and says: I know each item of the array is an array,
 * so set the reduces 'currentValue' to be the first and second items in the array (in this case its the from and to)
 * So in the first loop of the reduce it'd be .reduce(0, [994, 1008]);
 * Then the loop returns the accumulator (count) + the higher range minus the lower range. 
 * The result of that calculation then becomes 'count'.
 * i.e. reduce(0, [994, 1008]) returns 0 + 14.  Count is then 14.
 * Next loop, reduce(14, [11392, 11508]) returns 14 + 116.
 * This continues until all the ranges in that script are added up.  You end up with a number of characters in total from all the ranges that script uses.
 * 
 * The console log:
 * Takes the SCRIPTS, which is an array of objects (each object is a script with properties)
 * Then it calls reduce. No start value is specified so will being from first item in the array (the first object)
 * So a is initially the first object in the array.
 * b is also the first object because it's the currentValue (the current iteration of the reduce loop)
 * On the first run of the loop, it passes the same script to characterCount, and so returns a (because characterCount(b) is not < characterCount(a))
 * On the second run of the loop, it passes the first script in again, because that was the return value.
 * b becomes the next script (next iterator in the loop).
 * Then it checks if chatacterCount(a) is < characterCount(b).  If it is, then b becomes the count.
 * So it's tracking which object has the largest range, sets that as the current count, then checks against the next script.
 */


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }
  
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
