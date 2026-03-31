// scripts/introduction.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const title = document.querySelector("h2");

    // ----------------- Helper: Escape HTML -----------------
    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    // ----------------- Display Result -----------------
    function displayResult() {
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

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        displayResult();
    });

    // ----------------- Clear Button -----------------
    document.getElementById("clearBtn").addEventListener("click", function () {
        document.querySelectorAll("form input, textarea").forEach((input) => input.value = "");
    });

    // ----------------- Add Course Button -----------------
    document.getElementById("addCourse").addEventListener("click", function () {
        let courseDiv = document.getElementById("courses");
        if (!courseDiv) {
            courseDiv = document.createElement("div");
            courseDiv.id = "courses";
            form.insertBefore(courseDiv, this.parentElement.nextSibling);
        }

        const container = document.createElement("div");
        container.classList.add("courseContainer");
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

    // ----------------- Generate HTML -----------------
    document.getElementById("generateHTML").addEventListener("click", function () {
        const firstName = form.firstName.value;
        const middleName = form.middleName.value;
        const nickname = form.nickname.value;
        const lastName = form.lastName.value;
        const date = form.date.value;
        const adj = form.adj.value;
        const animal = form.animal.value;
        const divider = form.divider.value;
        const personal = form.personal.value;
        const background = form.background.value;
        const professional = form.professional.value;
        const academic = form.academic.value;
        const computer = form.computer.value;
        const quote = form.quote.value;
        const author = form.author.value;
        const funny = form.funny.value;
        const extra = form.extra.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;

        // Collect courses if they exist
        let coursesHTML = "";
        const courseContainers = document.querySelectorAll(".courseContainer");
        courseContainers.forEach((container) => {
            const inputs = container.querySelectorAll("input");
            coursesHTML += `<li>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value} (${inputs[3].value})</li>`;
        });

        const htmlOutput = `
<section>
    <h2>${firstName} ${middleName} ${nickname} ${lastName}</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Mascot:</strong> ${adj} ${animal}</p>
    <p><strong>Divider:</strong> ${divider}</p>
    <p><strong>Personal Statement:</strong> ${personal}</p>
    <ul>
        <li><strong>Personal Background:</strong> ${background}</li>
        <li><strong>Professional Background:</strong> ${professional}</li>
        <li><strong>Academic Background:</strong> ${academic}</li>
        <li><strong>Primary Computer:</strong> ${computer}</li>
    </ul>
    ${coursesHTML ? `<ul><strong>Courses:</strong>${coursesHTML}</ul>` : ""}
    <p><strong>Quote:</strong> "${quote}" - ${author}</p>
    <p><strong>Funny Thing:</strong> ${funny}</p>
    <p><strong>Anything Else:</strong> ${extra}</p>
    <p><strong>LinkedIn:</strong> ${linkedin}</p>
    <p><strong>GitHub:</strong> ${github}</p>
</section>
        `;

        // Change H2
        title.textContent = "Introduction HTML";

        // Display highlighted HTML
        result.innerHTML = `<pre><code class="language-html">${escapeHTML(htmlOutput)}</code></pre>`;

        form.style.display = "none";

        if (window.hljs) hljs.highlightAll();
    });
});