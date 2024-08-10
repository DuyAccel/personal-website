// edu-scripts.js

// Function to load content into edu-content div
function loadEduContent(file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("edu-content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading edu content:", error));
}

// Automatically load cert.html when edu-main.html is loaded
loadEduContent("public/edu/cert.html");

// Event listener for navigator clicks
document.querySelectorAll(".navigator a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetFile = event.target.getAttribute("href").substring(1) + ".html";
    loadEduContent(`public/edu/${targetFile}`);

    // Update active link style
    document.querySelectorAll(".navigator a").forEach((navLink) => {
      navLink.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
