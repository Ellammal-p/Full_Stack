function calculateGrade(mark) {
    if (mark >= 90 && mark <= 100) {
        console.log("A");
    } else if (mark >= 80 && mark < 90) {
        console.log("B");
    } else if (mark >= 70 && mark < 80) {
        console.log("C");
    } else if (mark >= 60 && mark < 70) {
        console.log("D");
    } else {
        console.log("Fail");
    }
}

calculateGrade(85);