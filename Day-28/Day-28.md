# Fynd Academy - _MEVN Stack_

<center>

<div style="padding:25px 0 25px 0 ;background: linear-gradient(25deg, #000000, #5d0ce4);background-size: 400% 400%;color:#fff;border-radius:5px;box-shadow: 10px 10px 5px lightblue;">

<img style="background:transparent" src="../assets/6037ed523cde7f1958341705_logo-removebg-preview.png" height="200"/>


</div>
</center>
<br/>

        Day-28 16/01/2023


### Introduction to JavaScript 

* Continued arrays method:
        * push and pop functions
        * shift and unshift functions
        * splice function
        * slice function
        * concat function
        * sort function
        * reverse function

* Math :
        * Math.PI
        * Math.round()
        * Math.sqrt()
        * Math.abs()
        * Math.ceil()
        * Math.floor()
        * Math.max()
        * Math.min()
        * Math.random()


* **push and pop**:
        * The push() method adds a new element to an array (at the end)
        * The pop() method removes the last element from an array

* **shift and unshift**:
        * The shift() method removes the first array element and "shifts" all other elements to a lower index.
        * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

* **splice**:
        * The splice() method can be used to add new items to an array:
        * The splice() method can also be used to remove elements from an array:
        * The splice() method can be used to add new items to an array:
        * The splice() method can also be used to remove elements from an array:

* **slice**:
        * The slice() method slices out a piece of an array into a new array.
        * This example slices out a part of an array starting from array element 1 ("Orange"):
        * This example slices out a part of an array starting from array element 3 ("Lemon"):

* **concat**:
        * The concat() method creates a new array by merging (concatenating) existing arrays:
        * The concat() method does not change the existing arrays. It always returns a new array.
        * The concat() method can take any number of array arguments:

* **sort**:
        * The sort() method sorts an array alphabetically:
        * The sort() method sorts the elements as strings in alphabetical and ascending order.
        * The sort() method sorts the values as strings by default. This works well for strings ("Apple" comes before "Banana").
        * However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
        * Because of this, the sort() method will produce incorrect result when sorting numbers.
        * You can fix this by providing a "compare function":
        * The compare function should return a negative, zero, or positive value, depending on the arguments:
        * When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

* **reverse**:
        * The reverse() method reverses the elements in an array.
        * Note: This method will change the original array.

        

