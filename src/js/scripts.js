function loadContent(file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      if (file.includes("edu-main.html")) {
        loadEduScript();
      } else {
        unloadEduScript();
      }
    })
    .catch((error) => console.log("Error loading content:", error));
}

function loadEduScript() {
  if (!document.getElementById("edu-scripts")) {
    const script = document.createElement("script");
    script.src = "../js/edu-scripts.js";
    script.id = "edu-scripts";
    script.defer = true;
    document.body.appendChild(script);
  }
}

function unloadEduScript() {
  const script = document.getElementById("edu-scripts");
  if (script) {
    script.remove();
  }
}

// Thiết lập sự kiện click cho các liên kết trong sidebar
document.querySelectorAll(".sidebar ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    const file = event.target.getAttribute("data-file"); // Lấy giá trị thuộc tính 'data-file'
    loadContent(file); // Tải nội dung từ file tương ứng

    // Remove "active" class from all links
    document.querySelectorAll(".sidebar ul li a").forEach((link) => {
      link.classList.remove("active");
    });

    // Add "active" class to the clicked link
    event.target.classList.add("active");
  });
});

// Automatically load the content of 'about.html' when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  loadContent("../content/main/about.html");

  const aboutLink = document.querySelector('.sidebar ul li a[href="#about"]');
  if (aboutLink) {
    aboutLink.classList.add("active");
  } else {
    console.log("Could not find the about link.");
  }
});
