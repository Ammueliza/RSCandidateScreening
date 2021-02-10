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
function PageSplitterCheck(
  items,
  itemsPerPage,
  checkItemsOnPage,
  checkItemBelongsTo
) {
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
  constructor(items, itemsPerPage) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.pages = [];
    this.splitPage();
  }

  splitPage() {
    // a method to split the items into pages
    let pageCount = this.pageCount();
    let start = 0;
    let end = this.itemsPerPage;

    for (let i = 0; i < pageCount; i++) {
      let itemsOnCurrentPage = this.items.slice(start, end);
      this.pages.push(itemsOnCurrentPage);
      start = start + this.itemsPerPage;
      end = start + this.itemsPerPage;
    }
  }

  pageCount() {
    //shows the amount of pages that the items have been split into
    let pageCount = 0;
    if (this.itemsPerPage > 0 && this.items && this.items.length > 0) {
      pageCount = Math.ceil(this.items.length / this.itemsPerPage);
    }
    return pageCount;
  }

  itemCount() {
    //shows the amount of items stored in the object.
    let itemCount = this.items.length;
    return itemCount;
  }

  pageItemCount(pageIndex) {
    //shows the amount of items stored on a specific page.
    //It should take an integer as parameter and look up the page with that index,
    //then return the item count on that page.
    let pageItems = this.pages[pageIndex];
    let numberOfItems = pageItems ? pageItems.length : -1;
    return numberOfItems;
  }

  pageIndex(itemIndex) {
    //shows the index of the page that the given item index is stored in.
    //It should take an integer as parameter and
    // return page's index where the item with the given index is stored in.
    let item = this.items[itemIndex];
    if (!item || this.pageCount() === 0) {
      return -1;
    }
    for (let [pageIndex, pageItems] of this.pages.entries()) {
      if (pageItems.includes(item)) {
        return pageIndex;
      }
    }
  }
}
//example
let results1 = new PageSplitter([1, 2, 3, "a", "b", "c"], 2);
console.log("------Testing PageSplitter--------");
//test case1 in PageSplitterCheck factory function
let pageSplitterCheck1 = new PageSplitterCheck([1, 2, 3, "a", "b", "c"], 2, 0, 2);
console.log(pageSplitterCheck1);
//test case2 in PageSplitterCheck factory function --- invalid page index ,invalid item index
let pageSplitterCheck2 = new PageSplitterCheck([1, 2, 3, "a", "b", "c"], 2, 3, -2);
console.log(pageSplitterCheck2);
//test case3 empty items
let pageSplitterCheck3 = new PageSplitterCheck([], 2, 3, -2);
console.log(pageSplitterCheck3);
//test case4 invalid  itemsperpage
let pageSplitterCheck4 = new PageSplitterCheck([1,2,3], -9, 0, 1);
console.log(pageSplitterCheck4);


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
function odd_even_product(my_list) {
  let product = my_list.reduce((acc, curr) => acc * curr, 1);
  let isProductEven = product % 2 === 0;
  if (isProductEven) {
    let sum = my_list.reduce((acc, curr) => acc + curr, 0);
    return sum;
  } else {
    return 0;
  }
}
console.log("------Testing odd_even_product--------")
let results2 = odd_even_product([5, 7, 9]);
console.log(results2);
let resultWithEvenProduct = odd_even_product([1, 2, 4, 6]);
console.log(resultWithEvenProduct);
let resultWithOddProduct = odd_even_product([-1, 55, 7]);
console.log(resultWithOddProduct);

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
function QuickSort(unsortedArray) {
  //Adding base condition for the recursion to stop
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  var lowerValues = [];
  var higherValues = [];

  var temp = [];

  var pivotKey = 0;

  //Type casting: Number() method converts a string to a number.
  var pivotValue = Number(unsortedArray.shift());

  for (var i = 0; i < unsortedArray.length; i++) {
    // removed = sign to make the conditions mutually exclusive
    if (parseInt(unsortedArray[i]) < pivotValue) {
      lowerValues.push(unsortedArray[i]);
    } else if (parseInt(unsortedArray[i]) > pivotValue) {
      higherValues.push(unsortedArray[i]);
    }
  }

  temp[pivotKey] = pivotValue;

  return QuickSort(lowerValues).concat(temp, QuickSort(higherValues));
}
console.log("------Testing Quick Sort--------")
console.log("Sorting with negatives");
let result3 = QuickSort([3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12]);
console.log(result3);
console.log("Sorting with negatives & floats");
let result31 = QuickSort([3, 0, 2, 5.9, 5.9, -1, 4, 1, 10, 23, 15, 20, 12]);
console.log(result31);
console.log("Sorting with negatives, floats and numeric strings");
let result32 = QuickSort([3, 0, 2, 5.9, 5.9,"9", -1, 4, 1, 10, 23, 15, 20, 12]);
console.log(result32);
