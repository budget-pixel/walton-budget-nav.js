(function () {
  function addStyles() {
    if (document.getElementById("wc-budget-pdf-styles")) return;

    var style = document.createElement("style");
    style.id = "wc-budget-pdf-styles";
    style.textContent = `
      .wc-pdf-button{
        display:inline-flex !important;
        align-items:center !important;
        justify-content:center !important;
        margin:0 !important;
        padding:7px 7px !important;
        border:0 !important;
        border-radius:999px !important;
        background:#006231 !important;
        color:#fff !important;
        font-family:Arial, Helvetica, sans-serif !important;
        font-size:10px !important;
        font-weight:900 !important;
        line-height:1 !important;
        letter-spacing:.04em !important;
        text-transform:uppercase !important;
        cursor:pointer !important;
        white-space:nowrap !important;
        z-index:999999 !important;
      }

      .wc-print-button-slot{
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
        flex:0 0 auto !important;
        position:relative !important;
        left:6px !important;
        z-index:999999 !important;
      }

      @media print{
        .wc-pdf-button,
        .wc-print-button-slot{
          display:none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function ensurePdfButton() {
    if (document.getElementById("wcDownloadPdf")) return;

    var button = document.createElement("button");
    button.type = "button";
    button.id = "wcDownloadPdf";
    button.className = "wc-pdf-button";
    button.textContent = "PDF";
    button.setAttribute("aria-label", "Print or save this page as a PDF");

    button.addEventListener("click", function () {
      window.print();
    });

    var navMenu = document.getElementById("nav-menu");
    var searchSlot = navMenu ? navMenu.querySelector(".wc-nav-search-slot") : null;

    if (navMenu) {
      var slot = document.createElement("div");
      slot.className = "wc-print-button-slot";

      if (searchSlot) {
        searchSlot.insertAdjacentElement("beforebegin", slot);
      } else {
        navMenu.appendChild(slot);
      }

      slot.appendChild(button);
      return;
    }

    button.style.position = "fixed";
    button.style.top = "80px";
    button.style.right = "20px";
    document.body.appendChild(button);
  }

  function init() {
    addStyles();
    ensurePdfButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("load", init);

  new MutationObserver(function () {
    ensurePdfButton();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
