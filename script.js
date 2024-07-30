document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll("#projects a");
    
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Project details coming soon!");
        });
    });
});