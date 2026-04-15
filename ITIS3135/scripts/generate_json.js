document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const title = document.querySelector("h2");

    function escapeHTML(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    document.getElementById("generateJSON").addEventListener("click", function () {

        const textareas = form.querySelectorAll("textarea");

        // collect courses
        const courses = [];
        document.querySelectorAll(".course-entry").forEach(function (course) {
            const inputs = course.querySelectorAll("input");

            courses.push({
                dept: inputs[0].value,
                number: inputs[1].value,
                name: inputs[2].value,
                reason: inputs[3].value
            });
        });

        const data = {
            firstName: form.querySelector('[name="firstName"]').value,
            middleName: form.querySelector('[name="middleName"]').value,
            lastName: form.querySelector('[name="lastName"]').value,

            mascot: {
                adjective: form.querySelector('[name="mascotAdjective"]').value,
                animal: form.querySelector('[name="mascotAnimal"]').value
            },

            divider: form.querySelector('[name="divider"]').value,

            personalStatement: textareas[1].value,
            background: textareas[2].value,
            academic: textareas[3].value,
            professional: textareas[4].value,
            goals: textareas[5].value,
            subject: textareas[6].value,
            primaryComputer: textareas[7].value,
            backupComputer: textareas[8].value,
            funFact: textareas[9].value,
            share: textareas[10].value,

            courses: courses,

            quote: form.querySelector('[name="quote"]').value,
            author: form.querySelector('[name="quoteAuthor"]').value,
            github: form.querySelector('[name="github"]').value,
            linkedin: form.querySelector('[name="linkedin"]').value
        };

        title.textContent = "Introduction JSON";

        result.innerHTML =
            "<pre><code class='language-json'>" +
            escapeHTML(JSON.stringify(data, null, 4)) +
            "</code></pre>";

        form.style.display = "none";

        if (window.hljs) {
            hljs.highlightAll();
        }
    });

});