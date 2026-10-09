```javascript
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("result").innerHTML =
        "Registration Successful!<br>" +
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Age: " + age + "<br>" +
        "Course: " + course + "<br>" +
        "Phone: " + phone;
});
```
