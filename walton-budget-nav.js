(function(){

  var wcBudgetAssetBaseUrl = "https://budget-pixel.github.io/walton-budget-nav.js/";
  var wcCipAssetBaseUrl = "https://budget-pixel.github.io/walton-cip-project-search/";
  window.wcCipAssetBaseUrl = wcCipAssetBaseUrl;

  var mobileStylesheetId = "wc-budget-mobile-styles";

  if(!document.getElementById(mobileStylesheetId)){
    var mobileStylesheet = document.createElement("link");
    mobileStylesheet.id = mobileStylesheetId;
    mobileStylesheet.rel = "stylesheet";
    mobileStylesheet.href = wcBudgetAssetBaseUrl + "walton-budget-mobile.css?v=3";
    document.head.appendChild(mobileStylesheet);
  }

  function loadWcScriptOnce(scriptId, src, onload){
    var existingScript = document.getElementById(scriptId);

    if(existingScript){
      if(typeof onload === "function"){
        if(existingScript.getAttribute("data-loaded") === "true"){
          onload();
        }else{
          existingScript.addEventListener("load", onload, { once:true });
        }
      }
      return;
    }

    var script = document.createElement("script");
    script.id = scriptId;
    script.src = src;
    script.async = true;

    script.addEventListener("load", function(){
      script.setAttribute("data-loaded", "true");
      if(typeof onload === "function"){
        onload();
      }
    });

    document.head.appendChild(script);
  }

  function loadWaltonBudgetSearchModules(onReady){
    loadWcScriptOnce(
      "wc-budget-search-data-script",
      wcBudgetAssetBaseUrl + "walton-budget-search-data.js?v=1",
      function(){
        loadWcScriptOnce(
          "wc-budget-search-script",
          wcBudgetAssetBaseUrl + "walton-budget-search.js?v=1",
          function(){
            var fallbackSlot = document.querySelector(".wc-nav-search-slot-fallback");

            if(fallbackSlot && fallbackSlot.parentNode){
              fallbackSlot.parentNode.removeChild(fallbackSlot);
            }

            if(typeof onReady === "function"){
              onReady();
            }
          }
        );
      }
    );
  }

  var css = `

  *,
  *::before,
  *::after{
    box-sizing:border-box !important;
  }

  html,
  body{
    width:100% !important;
    max-width:100% !important;
    overflow-x:hidden !important;

    -webkit-text-size-adjust:100% !important;
    text-size-adjust:100% !important;
  }

  .wc-split-brand,
  .wc-split-brand *{
    -webkit-text-size-adjust:100% !important;
    text-size-adjust:100% !important;
  }

  body{
    position:relative !important;
  }

  .story-page,
  .content,
  .main-content,
  main,
  article,
  [data-testid="story-page"],
  .page-content,
  .story-content{
    max-width:100% !important;
    overflow-x:hidden !important;
  }

  img,
  svg,
  canvas,
  iframe,
  video{
    max-width:100% !important;
  }

  /* WALTON COUNTY MENU RESTYLE */

  body,
  .story-page,
  .content,
  .main-content{
    margin-top:0 !important;
    padding-top:0 !important;
  }

  nav#nav-menu.nav-menu{
    position:sticky !important;
    top:0 !important;
    z-index:9999 !important;
    display:flex !important;
    align-items:center !important;
    justify-content:space-between !important;
    gap:24px !important;
    min-height:74px !important;
    margin-top:0 !important;
    padding:10px 28px !important;
    box-sizing:border-box !important;
    background:#ffffff !important;
    border-top:0 !important;
    border-bottom:4px solid #006231 !important;
    box-shadow:0 1px 4px rgba(36,52,77,0.04) !important;
    font-family:Arial, Helvetica, sans-serif !important;
  }

  nav#nav-menu.nav-menu::before{
    display:none !important;
  }

  nav#nav-menu .logo-container{
    position:relative !important;
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    flex:0 0 auto !important;
    width:auto !important;
    min-width:0 !important;
    height:64px !important;
    min-height:64px !important;
    margin:0 !important;
    padding:0 !important;
    background:transparent !important;
    border:0 !important;
    box-shadow:none !important;
    overflow:visible !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
  }

  nav#nav-menu .logo-container::before,
  nav#nav-menu .logo-container::after{
    content:none !important;
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
  }

  nav#nav-menu .logo-container img,
  nav#nav-menu img.js-logo-navigation,
  nav#nav-menu .logo-container .wc-logo-text-link{
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
  }

  .wc-split-brand{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    gap:4px !important;
    width:auto !important;
    min-width:max-content !important;
    height:58px !important;
    flex:0 0 auto !important;
    overflow:visible !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    text-decoration:none !important;
    color:inherit !important;
  }

  nav#nav-menu .wc-split-brand,
  .wc-standalone-brand .wc-split-brand,
  .wc-budget-footer-brand .wc-split-brand{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    gap:4px !important;
    width:auto !important;
    min-width:max-content !important;
    height:58px !important;
    flex:0 0 auto !important;
    overflow:visible !important;
  }

  nav#nav-menu .logo-container,
  .wc-standalone-brand,
  .wc-budget-footer-brand{
    position:relative !important;
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    flex:0 0 auto !important;
    width:auto !important;
    min-width:max-content !important;
    max-width:none !important;
    height:64px !important;
    min-height:64px !important;
    margin:0 !important;
    padding:0 !important;
    background:transparent !important;
    border:0 !important;
    box-shadow:none !important;
    overflow:visible !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    text-decoration:none !important;
  }

  .wc-split-brand-left,
  .wc-split-brand-right{
    display:flex !important;
    flex-direction:column !important;
    justify-content:center !important;
    gap:0 !important;
  }

  .wc-split-brand-left{
    align-items:flex-end !important;
  }

  .wc-split-brand-right{
    align-items:flex-start !important;
  }

  .wc-split-brand-top{
    display:block !important;
    color:#006231 !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    font-size:26px !important;
    line-height:.84 !important;
    font-weight:800 !important;
    letter-spacing:.11em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
  }

  .wc-split-brand-bottom{
    display:block !important;
    margin-top:2px !important;
    margin-right:1px !important;
    color:#000000 !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    font-size:10.588235px !important;
    line-height:9px !important;
    font-weight:800 !important;
    letter-spacing:.15em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
  }

  .wc-split-brand-right .wc-split-brand-bottom{
    margin-left:3px !important;
    margin-right:1px !important;
    letter-spacing:.20em !important;
  }

  .wc-split-brand-seal,
  nav#nav-menu .logo-container .wc-seal-mark{
    position:static !important;
    display:block !important;
    width:50px !important;
    height:50px !important;
    flex:0 0 50px !important;
    border-radius:999px !important;
    background:#ffffff url("https://stories.opengov.com/countyofwaltonfl/uploads/c432578eae78-Walton_County_Logo_no_background.png") center center / 46px 46px no-repeat !important;
    border:2px solid #d1be78 !important;
    box-sizing:border-box !important;
    transform:none !important;
    z-index:2 !important;
    cursor:pointer !important;
    text-decoration:none !important;
  }

  nav#nav-menu .wc-nav-search-slot{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-end !important;
    flex:0 0 460px !important;
    width:460px !important;
    min-width:460px !important;
    max-width:460px !important;
    margin-left:auto !important;
    margin-right:0 !important;
    position:relative !important;
    z-index:2 !important;
  }

  nav#nav-menu .wc-search-wrap{
    width:100% !important;
    margin:0 !important;
    padding:0 !important;
    font-family:Arial, Helvetica, sans-serif !important;
    box-sizing:border-box !important;
  }

  nav#nav-menu .wc-search-box{
    position:relative !important;
    width:100% !important;
    max-width:460px !important;
    margin:0 auto !important;
    display:flex !important;
    align-items:center !important;
    background:linear-gradient(135deg,#006231 0%,#0b7741 100%) !important;
    border-radius:999px !important;
    padding:9px 14px !important;
    box-sizing:border-box !important;
    box-shadow:0 8px 18px rgba(0,98,49,0.14) !important;
    transition:box-shadow .22s ease, background-color .22s ease !important;
  }

  nav#nav-menu .wc-search-box:hover,
  nav#nav-menu .wc-search-box:focus-within{
    transform:none !important;
    box-shadow:0 8px 18px rgba(0,98,49,0.14) !important;
  }

  nav#nav-menu .wc-search-icon{
    width:18px !important;
    height:18px !important;
    flex-shrink:0 !important;
    margin-right:10px !important;
    color:#ffffff !important;
    stroke:#ffffff !important;
    fill:none !important;
  }

  nav#nav-menu #wcTocSearch{
    width:100% !important;
    border:0 !important;
    outline:0 !important;
    background:transparent !important;
    color:#ffffff !important;
    font-size:14px !important;
    line-height:1.35 !important;
    font-weight:600 !important;
    font-family:Arial, Helvetica, sans-serif !important;
  }

  nav#nav-menu #wcTocSearch::placeholder{
    color:rgba(255,255,255,.72) !important;
    opacity:1 !important;
  }

  nav#nav-menu .wc-nav-search-results{
    position:absolute !important;
    top:calc(100% + 10px) !important;
    right:0 !important;
    width:100% !important;
    max-width:520px !important;
    max-height:420px !important;
    overflow:auto !important;
    background:#ffffff !important;
    border:1px solid rgba(209,190,120,0.38) !important;
    border-radius:18px !important;
    box-shadow:0 16px 34px rgba(36,52,77,0.14) !important;
    padding:8px !important;
    box-sizing:border-box !important;
    display:none;
    z-index:10000 !important;
  }

  nav#nav-menu .wc-nav-search-results.is-active{
    display:block !important;
  }

  nav#nav-menu .wc-nav-search-result{
    display:block !important;
    padding:12px 14px !important;
    border-radius:12px !important;
    text-decoration:none !important;
    border-bottom:1px solid rgba(36,52,77,0.08) !important;
  }

  nav#nav-menu .wc-nav-search-result:hover{
    background:rgba(0,98,49,0.06) !important;
  }

  nav#nav-menu .wc-nav-search-result strong{
    display:block !important;
    margin:0 0 4px 0 !important;
    color:#006231 !important;
    font-size:14px !important;
    font-weight:800 !important;
  }

  nav#nav-menu .wc-nav-search-result span{
    display:block !important;
    color:rgba(36,52,77,0.66) !important;
    font-size:12px !important;
    font-weight:600 !important;
  }

  nav#nav-menu .wc-nav-search-empty{
    padding:14px !important;
    color:rgba(36,52,77,0.68) !important;
    font-size:13px !important;
    font-weight:600 !important;
  }

  nav#nav-menu .nav-menu-list{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-end !important;
    gap:10px !important;
    margin:0 !important;
    padding:0 !important;
    list-style:none !important;
    flex:1 1 auto !important;
  }

  nav#nav-menu .nav-menu-item,
  nav#nav-menu .dropdown-item{
    position:relative !important;
    border-radius:999px !important;
    background:transparent !important;
    border:1px solid transparent !important;
  }

  nav#nav-menu .nav-menu-item-title,
  nav#nav-menu .dropdown-item-title{
    margin:0 !important;
    padding:11px 18px !important;
    color:#24344d !important;
    font-size:13px !important;
    line-height:1 !important;
    font-weight:700 !important;
    letter-spacing:.08em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
  }

  nav#nav-menu .nav-menu-item:hover,
  nav#nav-menu .dropdown-item:hover{
    background:rgba(0,98,49,0.06) !important;
  }

  nav#nav-menu .dropdown{
    margin-top:12px !important;
    border:1px solid rgba(209,190,120,0.38) !important;
    border-radius:18px !important;
    background:#ffffff !important;
    box-shadow:0 16px 34px rgba(36,52,77,0.14) !important;
    overflow:hidden !important;
  }

  nav#nav-menu .dropdown-list{
    margin:0 !important;
    padding:8px !important;
    list-style:none !important;
  }

  nav#nav-menu .hamburger-menu,
  nav#nav-menu .table-of-contents,
  nav#nav-menu .table-of-contents-button,
  nav#nav-menu .js-inline-nav-menu-item,
  nav#nav-menu .js-more-nav-menu-dropdown-button,
  nav#nav-menu li[data-id="more-nav-menu-dropdown"],
  nav#nav-menu li[aria-controls="more-nav-menu-dropdown-dropdown"],
  nav#nav-menu li[data-id="6989dbbdb4696f0b333f2246"]{
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
    width:0 !important;
    height:0 !important;
    overflow:hidden !important;
    pointer-events:none !important;
  }

  nav#nav-menu .nav-menu-item-title,
  nav#nav-menu .dropdown-item-title{
    pointer-events:auto !important;
  }

  nav#nav-menu .js-more-nav-menu-dropdown-button .nav-menu-item-title,
  nav#nav-menu li[data-id="more-nav-menu-dropdown"] .nav-menu-item-title,
  nav#nav-menu li[aria-controls="more-nav-menu-dropdown-dropdown"] .nav-menu-item-title{
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
  }

  [data-report-table-container-id]{
    border:1px solid rgba(209,190,120,0.45) !important;
    border-radius:24px !important;
    overflow:auto !important;
    -webkit-overflow-scrolling:touch !important;
    background:#ffffff !important;
    box-shadow:
      0 14px 34px rgba(0,98,49,0.08),
      0 4px 12px rgba(36,52,77,0.06) !important;
  }

  [data-table-scroll-container="true"]{
    overflow:auto !important;
    -webkit-overflow-scrolling:touch !important;
    max-width:100% !important;
  }

  [data-report-table-id]{
    width:max-content !important;
    min-width:100% !important;
    border-collapse:separate !important;
    border-spacing:0 !important;
    font-family:Arial, Helvetica, sans-serif !important;
    font-size:14px !important;
  }

  [data-report-table-id] th,
  [data-report-table-id] td{
    padding:12px 14px !important;
    border:0 !important;
    border-bottom:1px solid rgba(36,52,77,0.10) !important;
    vertical-align:middle !important;
  }

  [data-report-table-id] thead th{
    background:linear-gradient(135deg,#006231 0%,#0b7d45 100%) !important;
    color:#ffffff !important;
    font-weight:700 !important;
    text-align:center !important;
    border-bottom:4px solid #d1be78 !important;
  }

  [data-report-table-id] tbody th{
    color:#172033 !important;
    font-weight:700 !important;
    text-align:left !important;
    background:#ffffff !important;
  }

  [data-report-table-id] tbody td{
    color:#344054 !important;
    text-align:center !important;
    background:#ffffff !important;
  }

  [data-report-table-id] tbody tr:nth-child(even) th,
  [data-report-table-id] tbody tr:nth-child(even) td{
    background:rgba(0,98,49,0.04) !important;
  }

  [data-report-table-id] tbody tr:hover th,
  [data-report-table-id] tbody tr:hover td{
    background:rgba(209,190,120,0.18) !important;
  }

  [data-report-table-id] tbody tr.rowGroupTotal__cm3qr th,
  [data-report-table-id] tbody tr.rowGroupTotal__cm3qr td{
    background:linear-gradient(135deg,#d1be78 0%,#c2ac5f 100%) !important;
    color:#172033 !important;
    font-weight:700 !important;
    border-bottom:0 !important;
  }

  [data-report-table-id] caption{
    display:none !important;
  }

  .social-wrapper{
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
    height:0 !important;
    width:0 !important;
    overflow:hidden !important;
  }
  .powered-by{
    display:none !important;
    visibility:hidden !important;
    opacity:0 !important;
    height:0 !important;
    width:0 !important;
    overflow:hidden !important;
    pointer-events:none !important;
  }

  footer[role="contentinfo"]{
    display:block !important;
    visibility:visible !important;
    opacity:1 !important;
    position:relative !important;
    left:auto !important;
    right:auto !important;
    bottom:auto !important;
    width:100% !important;
    max-width:100% !important;
    min-height:150px !important;
    height:auto !important;
    margin:48px 0 0 0 !important;
    padding:0 0 18px 0 !important;
    background:#ffffff !important;
    border-top:4px solid #006231 !important;
    box-shadow:none !important;
    font-family:Arial, Helvetica, sans-serif !important;
    box-sizing:border-box !important;
    overflow:hidden !important;
    z-index:1 !important;
  }

  footer[role="contentinfo"] *{
    visibility:visible !important;
    opacity:1 !important;
  }

  footer[role="contentinfo"] .footer-container{
    display:block !important;
    visibility:visible !important;
    opacity:1 !important;
    width:100% !important;
    max-width:100% !important;
    min-height:82px !important;
    height:auto !important;
    margin:0 !important;
    padding:28px 36px 22px 36px !important;
    background:#ffffff !important;
    box-sizing:border-box !important;
    overflow:hidden !important;
  }

  footer[role="contentinfo"] .logo-container{
    display:none !important;
  }

  .wc-budget-footer-inner{
    display:flex !important;
    visibility:visible !important;
    opacity:1 !important;
    align-items:center !important;
    justify-content:space-between !important;
    gap:28px !important;
    width:100% !important;
    min-height:52px !important;
    height:auto !important;
    background:#ffffff !important;
    box-sizing:border-box !important;
    min-width:0 !important;
  }

  .wc-budget-footer-brand{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    gap:0 !important;
    width:auto !important;
    min-width:max-content !important;
    max-width:none !important;
    height:64px !important;
    flex:0 0 auto !important;
    overflow:visible !important;
    text-decoration:none !important;
  }


  .wc-budget-footer-links{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-end !important;
    flex-wrap:wrap !important;
    gap:8px !important;
  }

  .wc-budget-footer-links a{
    display:inline-flex !important;
    align-items:center !important;
    justify-content:center !important;
    min-height:38px !important;
    padding:10px 16px !important;
    border-radius:999px !important;
    color:#ffffff !important;
    background:linear-gradient(135deg,#006231 0%,#0b7741 100%) !important;
    border:0 !important;
    text-decoration:none !important;
    font-size:12px !important;
    line-height:1 !important;
    font-weight:800 !important;
    letter-spacing:.07em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
    box-shadow:0 8px 18px rgba(0,98,49,0.14) !important;
    transition:transform .2s ease, box-shadow .2s ease !important;
  }

  .wc-budget-footer-links a:hover{
    transform:translateY(-1px) !important;
    box-shadow:0 12px 24px rgba(0,98,49,0.20) !important;
    background:linear-gradient(135deg,#006231 0%,#0b7741 100%) !important;
  }

  .wc-budget-footer-bottom{
    display:block !important;
    visibility:visible !important;
    opacity:1 !important;
    width:100% !important;
    max-width:100% !important;
    min-height:52px !important;
    height:auto !important;
    margin:0 !important;
    padding:14px 36px 22px 36px !important;
    border-top:1px solid rgba(36,52,77,0.10) !important;
    background:#ffffff !important;
    box-sizing:border-box !important;
    color:rgba(36,52,77,0.70) !important;
    font-size:12px !important;
    line-height:1.5 !important;
    font-weight:600 !important;
    text-align:center !important;
    overflow:visible !important;
  }
  
  /* STANDALONE WALTON HEADER */

  .wc-standalone-budget-nav{
    position:sticky !important;
    top:0 !important;
    z-index:9999 !important;
    display:flex !important;
    align-items:center !important;
    justify-content:space-between !important;
    gap:24px !important;
    min-height:74px !important;
    padding:10px 28px !important;
    box-sizing:border-box !important;
    background:#ffffff !important;
    border-bottom:4px solid #006231 !important;
    box-shadow:0 1px 4px rgba(36,52,77,0.04) !important;
    font-family:Arial, Helvetica, sans-serif !important;
  }

  .wc-standalone-brand{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    gap:0 !important;
    width:auto !important;
    min-width:max-content !important;
    max-width:none !important;
    height:64px !important;
    flex:0 0 auto !important;
    overflow:visible !important;
    text-decoration:none !important;
  }


  .wc-standalone-links{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-end !important;
    gap:10px !important;
    margin-left:auto !important;
  }

  .wc-standalone-links a{
    display:inline-flex !important;
    align-items:center !important;
    justify-content:center !important;
    min-height:38px !important;
    padding:10px 16px !important;
    border-radius:999px !important;
    color:#24344d !important;
    background:transparent !important;
    border:1px solid transparent !important;
    text-decoration:none !important;
    font-size:13px !important;
    line-height:1 !important;
    font-weight:700 !important;
    letter-spacing:.08em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
  }

  .wc-standalone-links a:hover{
    background:rgba(0,98,49,0.06) !important;
  }

  
  `;

  var style = document.getElementById("wc-budget-nav-styles");

  if(!style){
    style = document.createElement("style");
    style.id = "wc-budget-nav-styles";
    document.head.appendChild(style);
  }

  style.textContent = css;

  function getWaltonSplitBrandHtml(linkHref, linkLabel){
    var sealTag = linkHref ? 'a' : 'span';
    var hrefAttr = linkHref ? ' href="' + linkHref + '"' : '';
    var ariaAttr = linkLabel ? ' aria-label="' + linkLabel + '"' : ' aria-hidden="true"';

    return `
      <div class="wc-split-brand" aria-label="Walton County Board of County Commissioners">
        <div class="wc-split-brand-left">
          <div class="wc-split-brand-top">Walton</div>
          <div class="wc-split-brand-bottom">Board of County</div>
        </div>

        <${sealTag} class="wc-split-brand-seal wc-seal-mark"${hrefAttr}${ariaAttr}></${sealTag}>

        <div class="wc-split-brand-right">
          <div class="wc-split-brand-top">County</div>
          <div class="wc-split-brand-bottom">Commissioners</div>
        </div>
      </div>
    `;
  }

  function initWcNavSearch(){
    var nav = document.querySelector("nav#nav-menu.nav-menu");

    if(!nav){
      return;
    }

    if(typeof window.initWaltonBudgetSearch === "function"){
      window.initWaltonBudgetSearch({
        nav:nav,
        getWaltonSplitBrandHtml:getWaltonSplitBrandHtml
      });
      return;
    }

    var logoContainer = nav.querySelector(".logo-container");

    if(logoContainer && !logoContainer.querySelector(".wc-split-brand")){
      logoContainer.innerHTML = getWaltonSplitBrandHtml(
        "https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdb4696f0b333f2246",
        "Go to Table of Contents"
      );
    }

    if(nav.querySelector(".wc-nav-search-slot")){
      return;
    }

    var slot = document.createElement("div");
    slot.className = "wc-nav-search-slot wc-nav-search-slot-fallback";

    slot.innerHTML = `
      <div class="wc-search-wrap">
        <div class="wc-search-box">
          <svg class="wc-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5Z"></path>
          </svg>

          <input
            type="search"
            id="wcTocSearch"
            placeholder="Search is loading..."
            aria-label="Search table of contents"
            autocomplete="off"
            disabled
          >
        </div>
      </div>

      <div class="wc-nav-search-results" role="listbox" aria-label="Search results"></div>
    `;

    nav.appendChild(slot);
  }

  function hideOpenGovMoreButton(){
    var nav = document.querySelector("nav#nav-menu.nav-menu");

    if(!nav){
      return;
    }

    var moreButtons = nav.querySelectorAll(
      '.js-more-nav-menu-dropdown-button, li[data-id="more-nav-menu-dropdown"], li[aria-controls="more-nav-menu-dropdown-dropdown"], li.nav-menu-item.clickable.js-dropdown-button.js-more-nav-menu-dropdown-button'
    );

    moreButtons.forEach(function(button){
      button.style.setProperty("display", "none", "important");
      button.style.setProperty("visibility", "hidden", "important");
      button.style.setProperty("opacity", "0", "important");
      button.style.setProperty("width", "0", "important");
      button.style.setProperty("height", "0", "important");
      button.style.setProperty("overflow", "hidden", "important");
      button.style.setProperty("pointer-events", "none", "important");
      button.setAttribute("aria-hidden", "true");
      button.setAttribute("tabindex", "-1");
    });

    nav.querySelectorAll(".nav-menu-item-title").forEach(function(title){
      if(title.textContent && title.textContent.trim().toLowerCase() === "more"){
        var parent = title.closest("li");

        if(parent){
          parent.style.setProperty("display", "none", "important");
          parent.style.setProperty("visibility", "hidden", "important");
          parent.style.setProperty("opacity", "0", "important");
          parent.style.setProperty("width", "0", "important");
          parent.style.setProperty("height", "0", "important");
          parent.style.setProperty("overflow", "hidden", "important");
          parent.style.setProperty("pointer-events", "none", "important");
          parent.setAttribute("aria-hidden", "true");
          parent.setAttribute("tabindex", "-1");
        }
      }
    });
  }

  function renderStandaloneBudgetNav(){
    if(!document.body){
      return;
    }

    if(document.querySelector(".wc-standalone-budget-nav")){
      return;
    }

    var header = document.createElement("header");
    header.className = "wc-standalone-budget-nav";

    header.innerHTML = `
      <div class="wc-standalone-brand" aria-label="Walton County">
        ${getWaltonSplitBrandHtml("", "")}
      </div>
    `;

    document.body.insertBefore(header, document.body.firstChild);
  }

  function renderWaltonBudgetFooter(){
    if(!document.body){
      return;
    }
    var footer = document.querySelector('footer[role="contentinfo"]');

    if(!footer){
      footer = document.createElement('footer');
      footer.setAttribute('role', 'contentinfo');

      var appContainer = document.getElementById('app');

      if(appContainer && appContainer.parentNode){
        appContainer.parentNode.insertBefore(footer, appContainer.nextSibling);
      }else{
        document.body.appendChild(footer);
      }
    }

    var appContainer = document.getElementById('app');

    if(appContainer && appContainer.parentNode && footer.previousElementSibling !== appContainer){
      appContainer.parentNode.insertBefore(footer, appContainer.nextSibling);
    }

    var footerContainer = footer.querySelector('.footer-container');

    if(!footerContainer){
      footerContainer = document.createElement('div');
      footerContainer.className = 'footer-container';
      footerContainer.id = 'footer';
      footer.insertBefore(footerContainer, footer.firstChild);
    }

    var hasOpenGovNav = !!document.querySelector('nav#nav-menu.nav-menu');

    footerContainer.innerHTML = `
      <div class="wc-budget-footer-inner">
        <div class="wc-budget-footer-brand" aria-label="Walton County">
          ${getWaltonSplitBrandHtml("", "")}
        </div>

        ${hasOpenGovNav ? `
        <nav class="wc-budget-footer-links" aria-label="Budget footer links">
          <a href="https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdb4696f0b333f2246">Budget Book</a>
          <a href="https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd4a9d93e5ac05a153">Capital Improvement Plan</a>
          <a href="${wcCipAssetBaseUrl}?view=all&v=6" target="_blank" rel="noopener noreferrer">Project Search</a>
          <a href="https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd48feef483c784fe0">Glossary & FAQ</a>
        </nav>
        ` : ``}
      </div>
    `;

    if(!footer.querySelector('.wc-budget-footer-bottom')){
      var footerBottom = document.createElement('div');
      footerBottom.className = 'wc-budget-footer-bottom';
      footerBottom.textContent = 'Prepared by the Walton County Office of Management and Budget for public transparency and informational purposes.';
      footer.appendChild(footerBottom);
    }
  }

  function startWcBudgetNav(){
    if(document.querySelector("nav#nav-menu.nav-menu")){
      loadWaltonBudgetSearchModules(function(){
        initWcNavSearch();
      });

      setTimeout(initWcNavSearch, 800);
      setTimeout(initWcNavSearch, 2000);
      hideOpenGovMoreButton();
      renderWaltonBudgetFooter();
      setTimeout(hideOpenGovMoreButton, 500);
      setTimeout(hideOpenGovMoreButton, 1500);
      setTimeout(renderWaltonBudgetFooter, 500);
      setTimeout(renderWaltonBudgetFooter, 1500);
      return;
    }

    renderStandaloneBudgetNav();

    if(document.getElementById('app')){
      renderWaltonBudgetFooter();
    }else{
      document.addEventListener('DOMContentLoaded', renderWaltonBudgetFooter, { once:true });
    }
  }

  function safelyStartWcBudgetNav(){
    if(!document.body){
      document.addEventListener('DOMContentLoaded', startWcBudgetNav, { once:true });
      return;
    }

    startWcBudgetNav();
  }

  safelyStartWcBudgetNav();

  function lockHorizontalPageScroll(){
    document.documentElement.style.setProperty('overflow-x','hidden','important');
    document.documentElement.style.setProperty('max-width','100%','important');
    document.body.style.setProperty('overflow-x','hidden','important');
    document.body.style.setProperty('max-width','100%','important');

    document.querySelectorAll('.story-page, .content, .main-content, main, article, [data-testid="story-page"], .page-content, .story-content').forEach(function(el){
      el.style.setProperty('max-width','100%','important');
      el.style.setProperty('overflow-x','hidden','important');
    });
  }

  lockHorizontalPageScroll();
  setTimeout(lockHorizontalPageScroll, 500);
  setTimeout(lockHorizontalPageScroll, 1500);
  setTimeout(lockHorizontalPageScroll, 3000);

})();
