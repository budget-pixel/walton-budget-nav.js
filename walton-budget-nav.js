(function(){

  var css = `

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
    display:block !important;
    flex:0 0 auto !important;
    width:360px !important;
    height:64px !important;
    min-width:360px !important;
    min-height:64px !important;
    margin:0 !important;
    padding:0 !important;
    background:transparent !important;
    border:0 !important;
    box-shadow:none !important;
    overflow:visible !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
  }

  nav#nav-menu .logo-container img,
  nav#nav-menu img.js-logo-navigation{
    display:none !important;
  }

  nav#nav-menu .logo-container .wc-seal-mark{
    position:absolute !important;
    left:0 !important;
    top:50% !important;
    display:block !important;
    width:52px !important;
    height:52px !important;
    border-radius:999px !important;
    background:#ffffff url("https://stories.opengov.com/countyofwaltonfl/uploads/c432578eae78-Walton_County_Logo_no_background.png") center center / 49px 49px no-repeat !important;
    border:2px solid #d1be78 !important;
    box-sizing:border-box !important;
    transform:translateY(-50%) !important;
    z-index:2 !important;
    cursor:pointer !important;
    text-decoration:none !important;
  }

  nav#nav-menu .logo-container .wc-logo-text-link{
    position:absolute !important;
    left:58px !important;
    top:6px !important;
    display:block !important;
    width:292px !important;
    height:48px !important;
    z-index:3 !important;
    cursor:pointer !important;
    text-decoration:none !important;
    background:transparent !important;
  }

  nav#nav-menu .logo-container::before{
    content:"WALTON COUNTY";
    position:absolute;
    left:60px !important;
    top:10px;
    color:#006231 !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    font-size:26px !important;
    line-height:1 !important;
    font-weight:800 !important;
    letter-spacing:.085em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
  }

  nav#nav-menu .logo-container::after{
    content:"BOARD OF COUNTY COMMISSIONERS";
    position:absolute;
    left:64px !important;
    top:38px;
    color:#000000 !important;
    font-family:"Avenir Next", Avenir, Helvetica, Arial, sans-serif !important;
    font-size:9px !important;
    line-height:1 !important;
    font-weight:800 !important;
    letter-spacing:.255em !important;
    text-transform:uppercase !important;
    white-space:nowrap !important;
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
  nav#nav-menu li[data-id="6989dbbdb4696f0b333f2246"]{
    display:none !important;
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

  @media(max-width:768px){

    nav#nav-menu.nav-menu{
      min-height:72px !important;
      padding:10px 14px !important;
      gap:12px !important;
    }

    nav#nav-menu .logo-container{
      width:330px !important;
      height:58px !important;
      min-width:330px !important;
      min-height:58px !important;
    }

    nav#nav-menu .logo-container::before{
      left:58px !important;
      top:11px;
      font-size:20px !important;
    }

    nav#nav-menu .logo-container::after{
      left:62px !important;
      top:35px;
      font-size:7px !important;
    }

    nav#nav-menu .wc-nav-search-slot{
      display:none !important;
    }
  }
  `;

  if(!document.getElementById("wc-budget-nav-styles")){
    var style = document.createElement("style");
    style.id = "wc-budget-nav-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function initWcNavSearch(){

    var nav = document.querySelector("nav#nav-menu.nav-menu");

    if(!nav){
      return;
    }

    var logoContainer = nav.querySelector(".logo-container");

    if(logoContainer && !logoContainer.querySelector(".wc-seal-mark")){
      var sealMark = document.createElement("a");
      sealMark.className = "wc-seal-mark";
      sealMark.href = "https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdb4696f0b333f2246";
      sealMark.setAttribute("aria-label", "Go to Table of Contents");
      logoContainer.insertBefore(sealMark, logoContainer.firstChild);
    }

    if(logoContainer && !logoContainer.querySelector(".wc-logo-text-link")){
      var logoTextLink = document.createElement("a");
      logoTextLink.className = "wc-logo-text-link";
      logoTextLink.href = "https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdb4696f0b333f2246";
      logoTextLink.setAttribute("aria-label", "Go to Table of Contents");
      logoContainer.insertBefore(logoTextLink, logoContainer.firstChild);
    }

    if(nav.querySelector(".wc-nav-search-slot")){
      return;
    }

    var slot = document.createElement("div");
    slot.className = "wc-nav-search-slot";

    slot.innerHTML = `
      <div class="wc-search-wrap">
        <div class="wc-search-box">
          <svg class="wc-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5Z"></path>
          </svg>

          <input
            type="search"
            id="wcTocSearch"
            placeholder="Search sections, summaries, funds, departments..."
            aria-label="Search table of contents"
            autocomplete="off"
          >
        </div>
      </div>

      <div class="wc-nav-search-results" role="listbox" aria-label="Search results"></div>
    `;

    nav.appendChild(slot);

    var results = slot.querySelector(".wc-nav-search-results");
    var input = slot.querySelector("#wcTocSearch");

    var links = [];
    var seenHrefs = {};

    var wcBudgetPages = [
      { title:"Table of Contents", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdb4696f0b333f2246" },
      { title:"GFOA Distinguished Budget Presentation Award", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd25815ed4e2fe49b4" },
      { title:"Transmittal Letter", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdc3a5aa570050fba9" },
      { title:"Budget-in-Brief", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=69e8ae83a93da8d66dc5e248" },
      { title:"Overview of Walton County", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd2e29b2249e0a5b99" },
      { title:"Organizational Structure", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd1af21806371d68e7" },
      { title:"Strategic Initiatives", section:"Introduction and Overview", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbda2feb1e35a5b122d" },
      { title:"Budget Process & Calendar", section:"Financial Structure, Policies, and Process", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdeb3f9f1b409e86d5" },
      { title:"Fund Descriptions and Structure", section:"Financial Structure, Policies, and Process", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd623edf6822e6e54d" },
      { title:"Department to Fund Relationship", section:"Financial Structure, Policies, and Process", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdcf5e99561d6ee920" },
      { title:"Financial Policies", section:"Financial Structure, Policies, and Process", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd42737a8f8389d90a" },
      { title:"Consolidated Financial Schedules", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=69ec1d92dac55b6e61a0d5a1" },
      { title:"Fund Financial Schedules", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=69efabd38621d8866c0990bc" },
      { title:"Summary of Revenues", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd901dc122f957d450" },
      { title:"Summary of Expenses", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdf2d67fd0fb063ce6" },
      { title:"Summary of Interfund Transfers", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd0c507ca05e715043" },
      { title:"Summary of Personnel", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdacbe9432cc1ec134" },
      { title:"Summary of Machinery, Vehicles & Equipment", section:"Financial Summaries", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdfdb1a2c2915743e4" },
      { title:"Board of County Commissioners", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbc6947be859271a418" },
      { title:"Clerk of Courts & County Comptroller", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbcc965cb8dc61a1909" },
      { title:"Property Appraiser", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbc872420fe4b9ad729" },
      { title:"Sheriff's Office", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbccae62897761aea36" },
      { title:"Supervisor of Elections", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbc238b94b182a17be3" },
      { title:"Tax Collector", section:"Constitutional Officers", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbc5a7603d48c5d254c" },
      { title:"Circuit Court", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd8610a5581eec0eb5" },
      { title:"County Court", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd80c5b0f0529f9f19" },
      { title:"Court Technology & Innovations", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbda7032c6c388f5159" },
      { title:"Guardian Ad Litem", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbda641a1ab299d7803" },
      { title:"Medical Examiner", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd185c827885253858" },
      { title:"Non-Profit Funding Program", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdcb2c399f2c8536fd" },
      { title:"Public Defender", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd71fca7e3dc1ad0fa" },
      { title:"South Walton Fire & State Control", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd799cff81b62a9d04" },
      { title:"State Attorney", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdfba867c19eddf0d3" },
      { title:"Statutory & Other Agency Funding", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdd8b75e8172b9646a" },
      { title:"Walton County Health Department", section:"Autonomous Entities", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd55c6cf9367a9f70d" },
      { title:"Building Construction and Maintenance", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe4a1b46dae2cd66cc" },
      { title:"Building Department", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd8e620c6522929798" },
      { title:"Code Compliance", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd5e724bfe505af7d1" },
      { title:"County Administration", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd15a00b5b02701878" },
      { title:"Eagle Springs Golf and Recreation Center", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd67c50a9caf8aa87f" },
      { title:"Eagle Springs Grill", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdfe52b05dd76fe3e9" },
      { title:"Emergency Management", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdfa0047aa8047423d" },
      { title:"Engineering Department", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd0fd7d79954f0d697" },
      { title:"Environmental Resources", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbdd658e0914c4e22af" },
      { title:"Extension Office", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbde2e896043bd2da11" },
      { title:"Geographic Info Systems", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbee3bceee932fc0d87" },
      { title:"Housing & Urban Development", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe639ac21532bb2142" },
      { title:"Human Resources", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe479fad77bfe0b08c" },
      { title:"Libraries", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbea6376f80ba7f7b69" },
      { title:"Mosquito Control", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbeba6bb0c34fe13bcc" },
      { title:"Mossy Head Wastewater Treatment Facility", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe3d7c82948e99141a" },
      { title:"Office of Management and Budget", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe31d617f90d821387" },
      { title:"Office of the County Attorney", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbed0f2f4405191cf7e" },
      { title:"Planning", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbeee8cc7637f457744" },
      { title:"Probation", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbeaab1d7fbd1d2ba62" },
      { title:"Public Works", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe512b64f66f25b84d" },
      { title:"Purchasing", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe30c197fb7c61e522" },
      { title:"Recreation", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbeb2d7e817998fc5b3" },
      { title:"Soil Conservation", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbec41205b833c4df0e" },
      { title:"Solid Waste", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe3d0fefca6b1a531e" },
      { title:"Tourism Administration", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbe794aa4891a3dc024" },
      { title:"Tourism Beach Operations", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbed36e2967b08392bf" },
      { title:"Tourism Lifeguard Services and Beach Safety", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbecf8c02d147a19f9f" },
      { title:"Veteran Services", section:"Department Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbf22a7f73b8c6a62b4" },
      { title:"Capital Improvement Plan", section:"Capital, Debt, and Financial Forecast", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd4a9d93e5ac05a153" },
      { title:"Debt Overview", section:"Capital, Debt, and Financial Forecast", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd7fa91d193bd3f319" },
      { title:"Financial Forecast", section:"Capital, Debt, and Financial Forecast", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd986e584c322f6216" },
      { title:"Glossary, Acronyms, and Frequently Asked Questions", section:"Glossary, Statistical, and Supplemental Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd48feef483c784fe0" },
      { title:"Statistical & Supplemental Information", section:"Glossary, Statistical, and Supplemental Information", href:"https://stories.opengov.com/countyofwaltonfl/cf6eaa7a-a98d-479a-9869-b20398ee38e5/published/re0lJHwus?currentPageId=6989dbbd1da6285c17aaf19a" }
    ];

    function addSearchLink(title, section, href){
      title = title ? title.trim() : "";
      section = section ? section.trim() : "Budget Book";
      href = href ? href.trim() : "";

      if(!title || !href || href === "#" || seenHrefs[href]){
        return;
      }

      seenHrefs[href] = true;

      links.push({
        title:title,
        section:section,
        href:href,
        searchText:(title + " " + section).toLowerCase()
      });
    }

    wcBudgetPages.forEach(function(page){
      addSearchLink(page.title, page.section, page.href);
    });

    function renderResultItem(item){
      var resultLink = document.createElement("a");
      resultLink.className = "wc-nav-search-result";
      resultLink.href = item.href;
      resultLink.innerHTML = `<strong>${item.title}</strong><span>${item.section}</span>`;
      results.appendChild(resultLink);
    }

    function renderResults(query){
      var normalizedQuery = query.toLowerCase().trim();
      results.innerHTML = "";

      if(!normalizedQuery){
        links.forEach(renderResultItem);
        results.classList.add("is-active");
        return;
      }

      var matches = links.filter(function(item){
        return item.searchText.indexOf(normalizedQuery) !== -1;
      }).slice(0,12);

      if(!matches.length){
        results.innerHTML = '<div class="wc-nav-search-empty">No matching sections found.</div>';
        results.classList.add("is-active");
        return;
      }

      matches.forEach(renderResultItem);
      results.classList.add("is-active");
    }

    input.addEventListener("input", function(){
      renderResults(input.value);
    });

    input.addEventListener("focus", function(){
      renderResults(input.value);
    });

    input.addEventListener("keydown", function(e){
      if(e.key === "Escape"){
        results.classList.remove("is-active");
        input.blur();
      }
    });

    document.addEventListener("click", function(e){
      if(!slot.contains(e.target)){
        results.classList.remove("is-active");
      }
    });
  }

  function startWcBudgetNav(){
    if(document.querySelector("nav#nav-menu.nav-menu")){
      initWcNavSearch();
      return;
    }

    setTimeout(startWcBudgetNav, 300);
  }

  startWcBudgetNav();

})();
```

Paste this entire code into `walton-budget-nav.js`. Do not add `<script>` or `<style>` tags around it. Then in OpenGov, use only this kind of loader:

```html
<script src="https://YOUR-USERNAME.github.io/walton-budget-nav/walton-budget-nav.js"></script>
```
