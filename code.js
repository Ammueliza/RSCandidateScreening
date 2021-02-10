/**********1************/
/*
Page Splitter

In this coding challenge, your task is to complete the PageSplitter class. It is supposed to take in an array of values and an non-negative integer indicating how many items will be allowed on each page of a web interface. The types of values contained within the collection/array are not relevant. All parameters and return values should use zero-based indexing.

You should implement the following four methods:

pageCount - shows the amount of pages that the items have been split into.
itemCount - shows the amount of items stored in the object.
pageItemCount - shows the amount of items stored on a specific page. It should take an integer as parameter and look up the page with that index, then return the item count on that page.
pageIndex - shows the index of the page that the given item index is stored in. It should take an integer as parameter and return page's index where the item with the given index is stored in.

Negative integers and non-existent indexes are allowed as parameters and the methods should return -1 in those cases.

The following are some examples of how this class is used:
let splitter = new PageSplitter([1, 2, 3, 'a', 'b', 'c'], 2);

splitter.pageCount(); // returns 3
splitter.itemCount(); // returns 6
splitter.pageItemCount(0) // returns 2
splitter.pageItemCount(3) // returns -1
splitter.pageIndex(2); // returns 1
splitter.pageIndex(-2); // returns -1
*/
function PageSplitterCheck( items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo ) {
  let splitter = new PageSplitter(items, itemsPerPage);
  let solution = [];
  solution[0] = splitter.pageCount();
  solution[1] = splitter.itemCount();
  solution[2] = splitter.pageItemCount(checkItemsOnPage);
  solution[3] = splitter.pageIndex(checkItemBelongsTo);
  return solution;
}
// DO NOT MODIFY THE CODE ABOVE!

class PageSplitter {
  //Insert your code here 
}
//example
let results1 = new PageSplitter([1, 2, 3, 'a', 'b', 'c'], 2);

/**********2************/
/*
Given a list of integers, determine if the product of all of the integers is even or odd.
    1) Return the sum of all of the integers if the product of all of the integers is even.</li><li>
    2) Return 0 if the product of all of the integers is odd.</li></ol><p><br></p><p>
    
    Note that 0 is considered even.
    
    Examples:
    Input: [1,2,3,4]
    Output: 10
    Explanation: 1 * 2 * 3 * 4 = 24. This is an even number. The sum of all of the integers is 10
    
    Input: [5,7,9]
    Output: 0
    Explanation: 5 * 7 * 9 = 315 is odd so the function returns 0
*/
function odd_even_product( my_list ) {
  //Insert your code here 
}
//example
let results2 = odd_even_product([5,7,9])

/**********3************/
/*
Your objective is to create a script that sorts an array of numbers in ascending order and returns the sorted array. Multiple sorting algorithms can be used. In this exercise, we're using the QuickSort algorithm. QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

The steps to implement quick sorting algorithm are as follows:
Step 1 − Select the right-most index value as the pivot
Step 2 − Partition the array into two subsets (one for values greater than the pivot and one for values less than the pivot)
Step 3 − QuickSort the left partition recursively
Step 4 − QuickSort the right partition recursively

The function should behave as follows:
Input array: [3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12]
Sorted output: -1,0,1,2,3,4,5,10,12,15,20,23

An initial function called QuickSort is given. It takes an unsorted array of both strings and integers as parameter. If there are duplicates in the unsorted array, the function should remove the duplicate values. 

It turns out, however, that the code doesn't pass all test cases. Your task is to fix the bug(s) in the code.
*/
function QuickSort( unsortedArray ) {

  //edit this code to debug
  var lowerValues = [];
  var higherValues = [];
  
  var temp = [];

  var pivotKey = 0;
  var pivotValue = unsortedArray.shift();
  
  for (var i = 0; i < unsortedArray.length; i++) {
    if (parseInt(unsortedArray[i]) <= pivotValue) {
      lowerValues.push(unsortedArray[i]);
    } else if (parseInt(unsortedArray[i]) >= pivotValue) {
        higherValues.push(unsortedArray[i]);     
    }
  }

  temp[pivotKey] = pivotValue;

  return QuickSort(lowerValues).concat(temp, QuickSort(higherValues));
}
//example
let results3 = QuickSort([3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12])