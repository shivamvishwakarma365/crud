// Define an array to store student records
const students = [];

// Function to add a new student record
function addStudent() {
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const age = document.getElementById('age').value;

    const student = { name, rollNumber, age };
    students.push(student);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('rollNumber').value = '';
    document.getElementById('age').value = '';

    displayStudents();
}

// Function to display student records
function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Roll Number: ${student.rollNumber}</p>
            <p>Age: ${student.age}</p>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;

        studentList.appendChild(studentDiv);
    });
}

// Function to edit a student record
function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('rollNumber').value = student.rollNumber;
    document.getElementById('age').value = student.age;

    students.splice(index, 1);
    displayStudents();
}

// Function to delete a student record
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

// Event listener for the student form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});
