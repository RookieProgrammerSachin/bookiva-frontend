import{o as u,a as t,s as h}from"./config-58d19dce.js";feather.replace();var n,o=!1;const m=async s=>{const a=n.filter(e=>e.hallName===s),i=[];a[0].reservations&&a[0].reservations.forEach(e=>i.push(e.reservedOn.split("-").reverse().join("-"))),console.log(i),flatpickr("#calendar",{disable:i,altInput:!0,minDate:"today",maxDate:new Date().fp_incr(15),inline:!0,dateFormat:"d-m-Y",onChange:(e,l,$)=>{o=!0;const c=document.getElementById("login-btn");c.setAttribute("href",`${t.currentUser===null?`/login/?hall=${a[0].hallName}&hallImg=${a[0].imgUrl.split("//")[1]}&date=${l}`:`/book/?hall=${a[0].hallName}&hallImg=${a[0].imgUrl.split("//")[1]}&date=${l}`}`),a[0].isAvailable&&c.classList.remove("disabled")}})},g=async()=>{n=await(await fetch("https://frail-puce-wear.cyclic.app/api/halls")).json(),console.log(n),n.forEach(a=>{d+=`<div class="hall-card">
            <div class="hall-img">
                <img src="${a.imgUrl}" alt="${a.hallName}">
            </div>
            <div class="hall-info ff-inter">
                <div class="hall-name-star">
                    <h3 class="hall-name"> ${a.hallName} </h3>
                    <h3 class="hall-rating">⭐ ${a.rating}</h3>
                </div>
                <p>${a.seatingCapacity}</p>
                <p>${a.isReseverd?"Reserved":"Unreserved"}</p>
            </div>
            <a href="#" class="butt-main details-btn ff-inter fs-s" data-venue="${a.hallName}">DETAILS</a>
        </div>
`}),b.innerHTML=`<div class="overlay overlay-hidden"></div>
    <div class="popup-modal-wrapper popup-hidden"></div>`+d,document.querySelectorAll(".details-btn").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),v(i.target.dataset.venue)})})},p=document.querySelector(".user-menu"),b=document.querySelector(".cards-container");document.querySelector(".user-nav").addEventListener("click",s=>{p.classList.toggle("user-menu-hidden")});var d="",r,f;function v(s){r=document.querySelector(".popup-modal-wrapper"),f=document.querySelector(".overlay"),screen.width<=500&&document.body.classList.toggle("body-noscroll"),f.classList.toggle("overlay-hidden"),r.classList.toggle("popup-hidden"),r.innerHTML="",r.classList.contains("popup-hidden")||y(s)}function y(s){o=!1;const i=n.filter(e=>e.hallName===s).map(e=>`
            <div class="close-btn-wrapper">
                <a href="#" class="close-btn ff-inter fs-2s fw-500"><i data-feather="x"></i></a></div>
                <div class="popup-modal">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${e.carouselPics.map(l=>`<div class="swiper-slide"><img src=${l}></div>`).join(`
`)}
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                    </div>
    
                    <div class="popup-details">
                        <div class="venue-info">
                            <h2 class="ff-inter fw-600">${e.hallName}, ${e.campus}</h2>
                            <hr class="hr-venue"/>
                            <p class="ff-inter fs-2s"><i data-feather="info"></i> Number of seats: ${e.seatingCapacity}</p>
                            <p class="ff-inter fs-2s"><i data-feather="info"></i> Has AC? ${e.hasAC?"Yes":"No"}</p>
                            <p class="ff-inter fs-2s"><i data-feather="info"></i> Is projector available? ${e.projectorAvailable?"Yes":"No"}</p>
                            <p class="ff-inter fs-2s"><i data-feather="info"></i> Is the hall reserved? ${e.isReserved?"Yes":"No"}</p>
                            ${e.isReserved?`<p class="ff-inter fs-2s"><i data-feather="info"></i> Hall reserved by: ${e.reservedBy}</p>`:""}
                            <p class="ff-inter fs-2s"><i data-feather="info"></i> Distance from main gate: ${e.distFromGate}</p>
                        </div>
                        <div class="venue-calendar ff-inter">
                            <input id="calendar" type="text" placeholder="Select a date">
                            <p class="ff-inter fs-2s"><strong>NOTE</strong>: If dates cannot be selected then they are already reserved</p>
                        </div>
                        <div class="venue-card">
                        <div class="venue-card-details">
                            <!--hall is commonly available for everyone to book ahillaya nu oru field-->
                            <div>
                                ${e.isAvailable?`<i data-feather="check-circle"></i>
                                <p class="ff-inter fs-2s">This hall is in working condition to reserve.</p>`:`<i data-feather="x-circle"></i>
                                <p class="ff-inter fs-2s">This hall is not in working condition to reserve.</p>`}
                                ${e.isAvailable?`<br><p class="ff-inter fs-s fw-600">Select a date to enable Book Button</p> <p class="ff-inter fs-s" style="margin-top:1rem;">Proceed to book ${t.currentUser===null?"after logging in":`as <strong>${t.currentUser.email}</strong> to confirm time`}, by clicking the button below</p>`:'<p class="ff-inter fs-s" style="margin-top:1rem;">Contact admin for further help</p>'}
                            </div>
                            </div>
                            ${t.currentUser===null?`<a href="/login/" id="login-btn" class="ff-inter butt-sub sign-in fs-s  ${e.isAvailable?"":"disabled"}">Login</a>`:`<a id="login-btn" href="/book/?hall=${e.hallName}&hallImg=${e.imgUrl.split("//")[1]}" class="ff-inter butt-main sign-in fs-s ${e.isAvailable&&o?"":"disabled"}">Book Now</a>`}
                        </div>
                        
                    </div>
                </div>
        `).join("");r.innerHTML=i,feather.replace(),document.querySelector(".close-btn").addEventListener("click",e=>{e.preventDefault(),v(" ")}),new Swiper(".swiper",{pagination:{el:".swiper-pagination",type:"progressbar"},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),m(s)}u(t,s=>{s&&(p.children[0].innerHTML=`
            <h3 class="ff-inter">Welcome, ${s.displayName||s.email}</h3>
            <a class="ff-inter fs-2s user-menu-link log-out" href="#">Log out</a>
            <a class="ff-inter fs-2s user-menu-link" href="/reset/">Reset password</a>
        `,document.querySelector(".log-out").onclick=a=>{a.preventDefault(),h(t).then(()=>{location.href="/"}).catch(i=>{console.log("Error occured during Sign out"+i)})})});g();
