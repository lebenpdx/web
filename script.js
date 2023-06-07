document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const content = document.querySelector(".content");

  loadContent("about.html");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      menuItems.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");

      loadContent(this.getAttribute("href"));
    });
  });

  function loadContent(url) {
    if (url === window.location.pathname) {
      return;
    }

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        content.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
