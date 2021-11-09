function createStudent(firstName, lastName, id) {
    const studentPrototype = {
        firstName: 'Mika',
        lastName: 'Hyakuya',
        id: 1,
        courses: ['Math', 'English', 'Informatics'],
        grades: [],
        averageGrade: function () {
            if (this.grades.length === 0)
                return 0;
            return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
        }
    }
    let student = Object.create(studentPrototype);
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    return student
}

let student = createStudent('Yuichiro', 'Hyakuya', 2);

function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(student);