let students = [
    ["Rahul", "Delhi", 8.5],
    ["Priya", "Mumbai", 9.1],
    ["Aman", "Ghaziabad", 8.8],
    ["Sneha", "Lucknow", 9.3],
    ["Riya", "Jaipur", 8.7]
];

let table = document.getElementById("studentTable");

students.forEach(function(student) {
    let row = table.insertRow();

    row.insertCell(0).innerHTML = student[0];
    row.insertCell(1).innerHTML = student[1];
    row.insertCell(2).innerHTML = student[2];
});