(function(){

  function injectWaltonHeaderSlideStyles(){
    if(document.getElementById("wc-header-slide-styles")){
      return;
    }

    var style = document.createElement("style");
    style.id = "wc-header-slide-styles";

    style.textContent = `

  /* UNIVERSAL HEADER STYLING */

  header.header{
    position:relative !important;
    overflow:hidden !important;
    background-image:none !important;
    background-color:#24344d !important;

    display:flex;
    align-items:center;

    box-shadow:0 10px 26px rgba(36,52,77,0.16);
  }

  /* REMOVE PLATFORM OVERLAY */

  header.header .header-overlay{
    display:none !important;
    opacity:0 !important;
    visibility:hidden !important;
  }

  /* SOFT CINEMATIC OVERLAY */

  header.header::before{
    content:"";

    position:absolute;

    inset:0;

    background:
      linear-gradient(
        to bottom,
        rgba(20,30,45,0.08) 0%,
        rgba(20,30,45,0.12) 72%,
        rgba(20,30,45,0.10) 100%
      );

    z-index:1;

    pointer-events:none;
  }

  /* ROTATING SLIDES */

  header.header .wc-header-slide{

    position:absolute;

    inset:0;

    background-size:cover;

    background-position:center center;

    background-repeat:no-repeat;

    opacity:0;

    transform:scale(1.02);

    animation:wcSmoothCrossfade 50s infinite ease-in-out;

    z-index:0;
  }

  /* IMAGE 1 */

  header.header .wc-slide-1{

    background-image:url("https://stories.opengov.com/countyofwaltonfl/uploads/ba46eed3917b-IMG_0064.jpeg");

    animation-delay:0s;
  }

  /* IMAGE 2 */

  header.header .wc-slide-2{

    background-image:url("https://stories.opengov.com/countyofwaltonfl/uploads/2d191029e912-Morrison-Springs-028.jpg");

    animation-delay:10s;
  }

  /* IMAGE 3 */

  header.header .wc-slide-3{

    background-image:url("https://stories.opengov.com/countyofwaltonfl/uploads/7189e42a6937-defuniak_springs_water_tower.jpg");

    animation-delay:20s;
  }

  /* IMAGE 4 */

  header.header .wc-slide-4{

    background-image:url("https://stories.opengov.com/countyofwaltonfl/uploads/9f88a93a7ea4-paxton.jpg");

    animation-delay:30s;
  }

  /* IMAGE 5 */

  header.header .wc-slide-5{

    background-image:url("https://stories.opengov.com/countyofwaltonfl/uploads/fd1a1a74415f-TBD-W-County-Hwy-30A-Santa-Rosa-Beach-FL-32459-USA-076-077-Seaside-MLS_Size.jpg");

    animation-delay:40s;
  }

  /* KEEP CONTENT ABOVE SLIDES */

  header.header .grid,
  header.header .container,
  header.header .col-1,
  header.header .header-nav,
  header.header .header-content{

    position:relative !important;

    z-index:3 !important;
  }

  /* REMOVE PLATFORM BLACK BOX */

  header.header
  .header-content > div.editable[style*="font-family"]{

    background:transparent !important;

    background-color:transparent !important;

    background-image:none !important;

    box-shadow:none !important;

    border:none !important;

    outline:none !important;

    padding:0 !important;
  }

  /* GLASS TITLE BOX */

  header.header
  .header-content > div.editable[style*="font-family"] h1{

    display:inline-block !important;

    margin:0 auto !important;

    padding:28px 48px 26px 48px !important;

    border-radius:24px !important;

    background:rgba(255,255,255,0.18) !important;

    border:1px solid rgba(255,255,255,0.28) !important;

    backdrop-filter:blur(12px) !important;

    -webkit-backdrop-filter:blur(12px) !important;

    box-shadow:
      0 14px 34px rgba(0,0,0,0.22),
      0 0 34px rgba(209,190,120,0.18) !important;

    animation:wcHeaderTextFade 1s ease forwards;
  }

  /* REMOVE BLACK FROM TEXT */

  header.header
  .header-content > div.editable[style*="font-family"] h1 span{

    background:transparent !important;

    background-color:transparent !important;

    background-image:none !important;

    box-shadow:none !important;
  }

  /* GOLD ACCENT */

  header.header
  .header-content > div.editable[style*="font-family"] h1::after{

    content:"";

    display:block;

    width:120px;

    height:5px;

    background:#d1be78;

    border-radius:4px;

    margin:18px auto 0 auto;
  }

  /* BOTTOM EDGE PROGRESS BAR */

  header.header .wc-progress{

    position:absolute;

    left:0;

    right:0;

    bottom:0;

    height:10px;

    background:rgba(255,255,255,0.10);

    overflow:hidden;

    z-index:5;
  }

  header.header .wc-progress::before{

    content:"";

    position:absolute;

    inset:0;

    background:
      linear-gradient(
        90deg,
        #b89b48 0%,
        #d1be78 25%,
        #f3e4a8 50%,
        #d1be78 75%,
        #b89b48 100%
      );

    transform-origin:left center;

    animation:wcDeckProgress 50s linear infinite;
  }

  /* SMOOTH CROSSFADE */

  @keyframes wcSmoothCrossfade{

    0%{
      opacity:0;
      transform:scale(1.02);
    }

    6%{
      opacity:1;
    }

    20%{
      opacity:1;
    }

    28%{
      opacity:0;
      transform:scale(1.045);
    }

    100%{
      opacity:0;
      transform:scale(1.045);
    }
  }

  /* DECK PROGRESS */

  @keyframes wcDeckProgress{

    from{
      transform:scaleX(0);
    }

    to{
      transform:scaleX(1);
    }
  }

  /* TITLE ENTRANCE */

  @keyframes wcHeaderTextFade{

    from{
      opacity:0;
      transform:translateY(24px);
    }

    to{
      opacity:1;
      transform:translateY(0);
    }
  }

  /* MOBILE */

  @media (max-width:768px){

    header.header{

      min-height:320px;
    }

    header.header
    .header-content > div.editable[style*="font-family"] h1{

      padding:22px 28px !important;

      border-radius:20px !important;
    }

    header.header .wc-progress{

      height:8px;
    }
  }

    `;

    document.head.appendChild(style);
  }

  function initWaltonHeaderSlides(){
    injectWaltonHeaderSlideStyles();

    var headers = document.querySelectorAll("header.header");

    headers.forEach(function(header){
      if(!header || header.querySelector(".wc-header-slide")){
        return;
      }

      var slide1 = document.createElement("div");
      var slide2 = document.createElement("div");
      var slide3 = document.createElement("div");
      var slide4 = document.createElement("div");
      var slide5 = document.createElement("div");
      var progress = document.createElement("div");

      slide1.className = "wc-header-slide wc-slide-1";
      slide2.className = "wc-header-slide wc-slide-2";
      slide3.className = "wc-header-slide wc-slide-3";
      slide4.className = "wc-header-slide wc-slide-4";
      slide5.className = "wc-header-slide wc-slide-5";

      progress.className = "wc-progress";

      header.insertBefore(slide5, header.firstChild);
      header.insertBefore(slide4, header.firstChild);
      header.insertBefore(slide3, header.firstChild);
      header.insertBefore(slide2, header.firstChild);
      header.insertBefore(slide1, header.firstChild);

      header.appendChild(progress);
    });
  }

  function safelyInitWaltonHeaderSlides(){
    if(!document.head || !document.body){
      document.addEventListener("DOMContentLoaded", initWaltonHeaderSlides, { once:true });
      return;
    }

    initWaltonHeaderSlides();
  }

  safelyInitWaltonHeaderSlides();

})();
