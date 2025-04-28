1. Line 3 prints 3 because the for loop declares i as var and increments post loop until i < length of prices. i increments to 3 even tho the last index of prices is 2 because of the post loop incrementation.
2. Line 13 prints 150. The discount argument is 0.5 so every element of prices is multiplied by 0.5. Since discountedPrice is a var, it saves the latest update of the prices element. 300 * 0.5 = 150
3. Line 14 prints 150. The console prints the last calculated finalPrice. ((150 * 100) / 100) = 150.
4. The function should return the discounted array [ 50, 100, 150].
5. The function raises the error ReferenceError: i is not defined. This is because i is block-scope variable so outside of the block it was defined (for loop), i is not accessible.
6. For the same reasons for #5, discountedPrice is not defined outside its block so a reference error is raised.
7. Line 14 prints 150. This is because the finalPrice variable's block-scope is within the function, so even when we access it outside the loop it can still be printed.
8. The function returns the discounted array [ 50, 100, 150].
9. ReferenceError: i is not defined. The error is raised because i's scope is within the for loop and not within the function.
10. Line 12 prints 3. 3 is the length of the prices argument and its scope is within the function.
11. The function returns the array [ 50, 00, 150 ]. Discounted's scope is within the function and when each discountedPrice is appended to the array's end.
12. Given object's notation access:
    1.  A. student.name
    2.  B. student['Grad Year']
    3.  C. student.greeting()
    4.  D. student['Favorite Teacher'].name
    5.  E. student.courseLoad[0] 
13. Arithmetic
    1.  '32' The integer 5 is mapped to its string representation and cancatenated with '3'.
    2.  1 Numeric comparisons convert strings to its integer representation. '3' is convert to integer 3.
    3.  3 Null is converted to integer 0 so 3+0=3.
    4.  '3null' null is concatenated with '3' as 'null'.
    5.  4 True is treated as integer 1 so 1+3=4.
    6.  0 Both false and null are mapped to 0.
    7.  '3undefined' Undefined is converted to a string and concatenated with '3'.
    8.  NaN '3' is converted to 3 and undefined becomes NaN so the calculation is not a valid number, thus NaN.
14. Comparison
    1.  true '2' becomes integer 2 and 2 > 1 is true.
    2.  false '2' becomes 2  and '12' becomes 12. 2 < 12 is true.
    3.  true '2' becomes 2 and both sides of == equals.
    4.  false The '===' operator has no type conversions so the comparison returns false because the operands are different types.
    5.  false True becomes 1 and 1 != 2 so the comparison is false.
    6.  true Boolean(value) where value isn't "empty" becomes true. 2 isn't "empty" so it becomes true hence true===true returns true.
15. == checks whether the operands are equal while including type conversion but === checks equality without type conversion.