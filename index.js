function setupHeaderEvents() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close-button");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    closeButton.classList.toggle("active");
  });

  closeButton.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeButton.classList.remove("active");
  });
}

window.addEventListener("load", function () {
  // Create individual elements for the navigation bar components
  const navBar = document.createElement("nav");
  navBar.classList.add("navbar");

  const containerNav = document.createElement("div");
  containerNav.classList.add("container-nav");

  const logo = document.createElement("img");
  logo.src = "images/nicole-logo.svg";
  logo.alt = "Nicole Orbe Front-end Developer Portfolio and Niche Sites";
  logo.classList.add("logo");

  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  `;

  const navLinks = document.createElement("ul");
  navLinks.classList.add("nav-links");
  navLinks.innerHTML = `
    <div class="close-button">&times;</div>
    <li><a href="https://www.thenicoleorbe.com/">Home</a></li>
    <li><a href="https://www.thenicoleorbe.com/certificates">Certifications</a></li>
    <li><a href="https://www.thenicoleorbe.com/my-work">Projects</a></li>
    <li><a href="https://www.shecodes.io/graduates/80721-nicole-orbe" target="_blank"">About</a></li>
  `;

  // Append the components to the respective parent elements
  containerNav.appendChild(logo);
  containerNav.appendChild(menuToggle);
  containerNav.appendChild(navLinks);
  navBar.appendChild(containerNav);

  // Append the navigation bar to the header
  const header = document.getElementById("header");
  header.appendChild(navBar);

  // Call the function to set up event listeners
  setupHeaderEvents();
});

// Footer
window.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("footer").innerHTML = `
        <div class="site-info">
          &copy; 2023 Nicole Orbe. Design by
          <span id="highlight-nicole">
            <a
              href="https://www.shecodes.io/graduates/80721-nicole-orbe"
              target="_blank"
              >Nicole Orbe</a
            ></span
          >
          and is
          <a
            href="https://github.com/nicoleorbe/challenge_travel_destination"
            target="_blank"
            >open-sourced on GitHub</a
          >
          and
          <a
            href="https://legendary-stroopwafel-595512.netlify.app/"
            target="_blank"
          >
            hosted on Netlify</a
          >
        </div>`;
});
