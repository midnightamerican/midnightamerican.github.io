document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");

    // prevent default submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    // clear button
    document.getElementById("clearBtn").addEventListener("click", function () {
        document.querySelectorAll("input, textarea").forEach(function (el) {
            el.value = "";
        });
    });

    // add course
    document.getElementById("addCourse").addEventListener("click", function () {

        const container = document.createElement("div");
        container.classList.add("course-entry");

        container.innerHTML = `
            <input placeholder="Dept" />
            <input placeholder="Number" />
            <input placeholder="Course Name" />
            <input placeholder="Reason" />
            <button type="button" class="delete-button">Delete</button>
        `;

        document.getElementById("courses").appendChild(container);

        container.querySelector(".delete-button").addEventListener("click", function () {
            container.remove();
        });
    });

    // delete existing buttons
    document.querySelectorAll(".delete-button").forEach(function (btn) {
        btn.addEventListener("click", function () {
            btn.parentElement.remove();
        });
    });

});