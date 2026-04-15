document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const title = document.querySelector("h2");

    function escapeHTML(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    document.getElementById("generateHTML").addEventListener("click", function (event) {
        // Prevent page refresh if the button is inside the form
        event.preventDefault();

        // 1. Collect courses using the class wrapper
        let courseHTML = "";
        document.querySelectorAll(".course-entry").forEach(function (course) {
            const inputs = course.querySelectorAll("input");
            if (inputs.length >= 4) {
                courseHTML += `    <li><strong>${inputs[0].value} ${inputs[1].value}</strong> - ${inputs[2].value}: ${inputs[3].value}</li>\n`;
            }
        });

        // 2. Generate the HTML string using form names
        // This is much more reliable than using textareas[1], textareas[2], etc.
        const htmlOutput = `
<section>
  <h2>${form.firstName.value} ${form.lastName.value}</h2>

  <p>${form.personalStatement.value}</p>

  <ul>
    <li><strong>Background:</strong> ${form.personalBackground.value}</li>
    <li><strong>Academic:</strong> ${form.academicBackground.value}</li>
    <li><strong>Professional:</strong> ${form.professionalBackground.value}</li>
    <li><strong>Goals:</strong> ${form.careerGoals.value}</li>
  </ul>

  <h3>Courses</h3>
  <ul>
${courseHTML}  </ul>

  <blockquote>
    "${form.quote.value}" - ${form.quoteAuthor.value}
  </blockquote>
</section>`;

        // 3. Update the UI
        title.textContent = "Introduction HTML";

        result.innerHTML =
            "<pre><code class='language-html'>" +
            escapeHTML(htmlOutput) +
            "</code></pre>";

        // Hide the form so user sees the result
        form.style.display = "none";

        // Trigger Highlight.js if it exists
        if (window.hljs) {
            hljs.highlightAll();
        }
    });
});