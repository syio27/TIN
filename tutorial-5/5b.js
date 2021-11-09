function Student(firstName, lastName, id, grade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grade = grade;
}

function displayFullName(obj){
    return `Full name of Student: ${obj.firstName} ${obj.lastName}`;
}

function averageGrade(obj){
    sum = 0;
    for(var i in obj.grade){
        sum += obj.grade[i];
    }
    average = sum/obj.grade.length;
    return `The average grade: ${average}`;
}

const firstStudent = new Student("Mika", "Hyakuya", 1, [5,5,5,5,3,2,5,4,4.5,3.5,4]);
const secondStudent = new Student("Yuichiro", "Hyakuya", 2, [4,2,5,4,3,5,2,3,3.5,5,4.5,2]);

console.log(displayFullName(firstStudent));
console.log(averageGrade(firstStudent));
console.log(displayFullName(secondStudent));
console.log(averageGrade(secondStudent));