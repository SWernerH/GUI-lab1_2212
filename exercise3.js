const student = {

    firstname: "John",
    lastname: "Doe",
    age: 20,
    studentId: "S12345",
    courses: [],

    getFullName: function() {
        return this.firstname + " " + this.lastname;
    },

    enrollCourse(courseName) {
        this.courses.push(courseName);
    },

    courseCount() {
        return this.courses.length;
    }
}

console.log(student.getFullName()); // Output: John Doe
student.enrollCourse("CMPS2212");
student.enrollCourse("MATH2210");
console.log(student.courseCount()); // Output: 2

