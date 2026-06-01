function ensurePdfButton() {
  var existingButton = document.getElementById("wcDownloadPdf");

  if (existingButton) return;

  var navMenu = document.getElementById("nav-menu");

  var button = document.createElement("button");
  button.type = "button";
  button.id = "wcDownloadPdf";
  button.className = "wc-pdf-button";
  button.textContent = "PDF";

  button.addEventListener("click", function () {
    window.print();
  });

  if (!navMenu) {
    button.style.position = "fixed";
    button.style.top = "80px";
    button.style.right = "20px";
    button.style.zIndex = "999999";

    document.body.appendChild(button);
    return;
  }

  // existing nav insertion logic...
}
