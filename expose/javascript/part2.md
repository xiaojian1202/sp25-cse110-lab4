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