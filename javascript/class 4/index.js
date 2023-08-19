/*
 1. Boolean (true, false)
 2. strict equality operator (===)
 3. less than & greater than (> , <)
 4. greater than equal to (>=) 
 5. less than equal to (<=) 
 6. not equal to (!==) 
 7. if statement 
 8. else if statement 
 9. else statement 
*/

// If statement
var studentName = prompt('tell your Name');
var studentId = "382u02";
var attendance = prompt('tell your attendance');
var totalClasses = 30;
var studentAttendancePercentage = attendance / totalClasses * 100;

console.log(studentAttendancePercentage);

if (studentAttendancePercentage > 70) {
    alert(studentName + "'s attendance is Ok");
} else if (studentAttendancePercentage >= 50) {
    alert(`you should focus on your attendance`);
} else if (studentAttendancePercentage > 40) {
    alert(`last chance`);
} else {
    alert(`you should leave`);
}