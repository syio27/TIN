student = {
    firstName: "Mika",
    lastName: "Hyakuya",
    id: 1,
    grades: [5,5,5,5,3,2,5,4,4.5,3.5,4],

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name){
        let fullname = name.split(" ");
        if(fullname.length !== 2)
            throw "the entered data is incorrect";
        this.firstName = fullname[0];
        this.lastName = fullname[1];
    },

    get averageGrade(){
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
}

console.log(`Full name of student: ${student.fullName}, and his/her average grade ${student.averageGrade}`);
student.fullName = "Yuichiro Hyakuya";
console.log("THE FULL NAME IS RESET")
console.log(`Full name of student: ${student.fullName}, and his/her average grade ${student.averageGrade}`);