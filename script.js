function searchJobs() {
    let input = document.getElementById("search").value.toLowerCase();
    let jobs = document.querySelectorAll(".job");

    jobs.forEach(function(job) {
        let text = job.innerText.toLowerCase();

        if (text.includes(input)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

function applyJob(jobTitle) {
    document.getElementById("jobTitle").value = jobTitle;

    document.getElementById("apply").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let jobTitle = document.getElementById("jobTitle").value;
    let resume = document.getElementById("resume").files[0];

    if (!resume) {
        alert("Please upload your resume.");
        return;
    }

    document.getElementById("message").innerText =
        "Thank you, " + name +