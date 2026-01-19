// Apply global body styles
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.background =
  "linear-gradient(135deg, #667eea, #764ba2)";
document.body.style.fontFamily = '"Segoe UI", Tahoma, sans-serif';
document.body.style.color = "#ffffff";

// Create container
const container = document.createElement("div");
container.style.background = "rgba(255, 255, 255, 0.15)";
container.style.padding = "40px 50px";
container.style.borderRadius = "12px";
container.style.textAlign = "center";
container.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
container.style.backdropFilter = "blur(8px)";

// Create heading
const heading = document.createElement("h1");
heading.textContent = "Hello from GitHub Actions CI!";
heading.style.fontSize = "2.2rem";
heading.style.marginBottom = "15px";

// Create paragraph
const paragraph = document.createElement("p");
paragraph.textContent =
  "This is a static HTML page deployed with GitHub Pages.";
paragraph.style.fontSize = "1.1rem";
paragraph.style.opacity = "0.9";

// Append elements
container.appendChild(heading);
container.appendChild(paragraph);
document.body.appendChild(container);
