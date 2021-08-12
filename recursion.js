/** product: calculate the product of an array of numbers. */

function product(nums) {
  const _product = (nums) =>{
    //base case
    if (nums.length === 0) return 1;
    //normal case
    else return nums.pop() * product(nums);
  }

  return _product([...nums]);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if(i === words.length) return 0;
  else {
    const firstWordLength = words[i].length;
    const contestantLength = longest(words, i+1);
    if(firstWordLength > contestantLength) return firstWordLength;
    else return contestantLength;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return '';
  else return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  //we have gone further than halfway through the string, finish it!
  if(i > str.length / 2) return true;
  //normal case
  //this letter matches it's counterpart 
  if(str[i].toLowerCase() === str[str.length - 1 - i]) 
    //see if the next one also does
    return true && isPalindrome(str, i+1);
  else 
    //Not a palindrom, return a false and throw off the AND chain we had going
    return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx >= arr.length) return -1;
  if(arr[idx] === val) return idx;
  else return findIndex(arr, val, idx+1); 
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  const _revString = (str, idx=0) => {
    if(idx >= str.length) return ''
    else return str[str.length - 1 - idx] + _revString(str, idx + 1);
  }
  return _revString([...str])
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];
  for(key in obj){
    if(typeof obj[key] === 'string')
      strings.push(obj[key]);
    else if (typeof obj[key] === 'object')
      strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
[1,2], 1
function binarySearch(arr, val) {
  //baseCase
  if (arr.length === 0) return -1;

  //normal case
  const mid = Math.floor((arr.length - 1)/2);
  if(arr[mid] === val) 
    return mid;
  else if(arr[mid] > val) 
    return binarySearch(arr.slice(0, mid - 1), val);
  else if(arr[mid] < val) {
    const result = binarySearch(arr.slice(mid + 1, arr.length), val);
    if(result === -1) 
      return -1;
    else 
      return mid + 1 + result;
  }
    
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
