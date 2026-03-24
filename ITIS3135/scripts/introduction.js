const formElement = document.getElementById("form");
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    displayResult();
});


document.getElementById("clearBtn").addEventListener("click", function () {
    document.querySelectorAll("form input, textarea").forEach(input => {
        input.value = "";
    });
});


document.getElementById("addCourse").addEventListener("click", function () {
    const courseDiv = document.getElementById("courses");

    const container = document.createElement("div");

    container.innerHTML = `
        <input type="text" placeholder="Dept (ITIS)" required>
        <input type="text" placeholder="Number (3135)" required>
        <input type="text" placeholder="Course Name" required>
        <input type="text" placeholder="Reason" required>
        <button type="button" class="deleteCourse">Delete</button>
    `;

    courseDiv.appendChild(container);

   
    container.querySelector(".deleteCourse").addEventListener("click", function () {
        container.remove();
    });
});


function displayResult() {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const personal = form.personal.value;

    result.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>${personal}</p>
        <a href="#" onclick="location.reload()">Reset Page</a>
    `;

    form.style.display = "none";
}