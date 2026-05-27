

(function(){

  if(window.__wcPerformanceAccordionLoaded){
    return;
  }

  window.__wcPerformanceAccordionLoaded = true;

  function buildWaltonPerformanceAccordions(){

    if(window.innerWidth > 768){
      return;
    }

    document.querySelectorAll(".wc-performance-table-wrap").forEach(function(wrap){

      if(wrap.querySelector(".wc-performance-mobile-accordion")){
        return;
      }

      const table = wrap.querySelector(".wc-performance-table");

      if(!table){
        return;
      }

      const rows = table.querySelectorAll("tbody tr");

      let currentCode = "";
      let currentGoal = "";

      const accordion = document.createElement("div");
      accordion.className = "wc-performance-mobile-accordion";

      rows.forEach(function(row){

        const cells = row.querySelectorAll("td");

        if(cells.length < 6){
          return;
        }

        let index = 0;

        if(row.querySelector(".wc-performance-code")){
          currentCode = cells[index].innerText.trim();
          index++;
        }

        if(row.querySelector(".wc-performance-goal")){
          currentGoal = cells[index].innerText.trim();
          index++;
        }

        const objective = cells[index] ? cells[index].innerText.trim() : "";
        index++;

        const measure = cells[index] ? cells[index].innerText.trim() : "";
        index++;

        const actual2223 = cells[index] ? cells[index].innerText.trim() : "";
        index++;

        const actual2324 = cells[index] ? cells[index].innerText.trim() : "";
        index++;

        const projected2425 = cells[index] ? cells[index].innerText.trim() : "";
        index++;

        const projected2526 = cells[index] ? cells[index].innerText.trim() : "";

        const item = document.createElement("div");
        item.className = "wc-performance-item";

        item.innerHTML = `
          <button class="wc-performance-summary" type="button">

            <div class="wc-performance-summary-top">

              <div class="wc-performance-code-pill">
                ${currentCode}
              </div>

              <div class="wc-performance-measure-title">
                ${measure}
              </div>

            </div>

          </button>

          <div class="wc-performance-detail">

            <div class="wc-performance-detail-block">
              <div class="wc-performance-detail-label">
                Objective
              </div>

              <div class="wc-performance-detail-text">
                ${objective}
              </div>
            </div>

            <div class="wc-performance-detail-block">
              <div class="wc-performance-detail-label">
                Departmental Goal
              </div>

              <div class="wc-performance-detail-text">
                ${currentGoal}
              </div>
            </div>

            <div class="wc-performance-metric-row">
              <div class="wc-performance-metric-year">
                Actual 2022-23
              </div>

              <div class="wc-performance-metric-value">
                ${actual2223}
              </div>
            </div>

            <div class="wc-performance-metric-row">
              <div class="wc-performance-metric-year">
                Actual 2023-24
              </div>

              <div class="wc-performance-metric-value">
                ${actual2324}
              </div>
            </div>

            <div class="wc-performance-metric-row">
              <div class="wc-performance-metric-year">
                Projected 2024-25
              </div>

              <div class="wc-performance-metric-value">
                ${projected2425}
              </div>
            </div>

            <div class="wc-performance-metric-row">
              <div class="wc-performance-metric-year">
                Projected 2025-26
              </div>

              <div class="wc-performance-metric-value">
                ${projected2526}
              </div>
            </div>

          </div>
        `;

        const summary = item.querySelector(".wc-performance-summary");

        summary.addEventListener("click", function(){
          item.classList.toggle("is-open");
        });

        accordion.appendChild(item);

      });

      wrap.appendChild(accordion);

    });

  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", buildWaltonPerformanceAccordions);
  }else{
    buildWaltonPerformanceAccordions();
  }

  window.addEventListener("resize", function(){

    clearTimeout(window.__wcPerformanceResizeTimer);

    window.__wcPerformanceResizeTimer = setTimeout(function(){

      document.querySelectorAll(".wc-performance-mobile-accordion").forEach(function(el){
        el.remove();
      });

      buildWaltonPerformanceAccordions();

    }, 150);

  });

})();
