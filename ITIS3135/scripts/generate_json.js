document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const title = document.querySelector("h2");

    // Escape HTML for display
    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    // Generate JSON button
    const generateJSONBtn = document.getElementById("generateJSON");
    if (!generateJSONBtn) return;

    generateJSONBtn.addEventListener("click", function () {
        // Collect courses
        let courses = [];
        const courseContainers = document.querySelectorAll(".courseContainer");
        for (let i = 0; i < courseContainers.length; i++) {
            const inputs = courseContainers[i].querySelectorAll("input");
            courses.push({
                dept: inputs[0].value,
                number: inputs[1].value,
                name: inputs[2].value,
                reason: inputs[3].value
            });
        }

        // Build JSON object
        const data = {
            firstName: form.firstName.value,
            middleName: form.middleName.value,
            nickname: form.nickname.value,
            lastName: form.lastName.value,
            date: form.date.value,
            mascot: {
                adj: form.adj.value,
                animal: form.animal.value
            },
            divider: form.divider.value,
            personalStatement: form.personal.value,
            personalBackground: form.background.value,
            professionalBackground: form.professional.value,
            academicBackground: form.academic.value,
            primaryComputer: form.computer.value,
            courses: courses,
            quote: form.quote.value,
            author: form.author.value,
            funnyThing: form.funny.value,
            extra: form.extra.value,
            linkedin: form.linkedin.value,
            github: form.github.value
        };

        // Update H2
        title.textContent = "Introduction JSON";

        // Display JSON nicely
        result.innerHTML = "<pre><code class='language-json'>" + escapeHTML(JSON.stringify(data, null, 4)) + "</code></pre>";
        form.style.display = "none";

        // Highlight.js
        if (window.hljs) hljs.highlightAll();
    });
});