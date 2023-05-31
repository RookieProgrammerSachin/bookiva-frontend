import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config.js";
// import flatpickr from "flatpickr";

feather.replace();

var venueData;

const renderCalendar = async () => {
    flatpickr("#calendar", {
        disable: ["2023-06-05", "2023-06-08"],
        altInput: true,
        minDate: "today",
        maxDate: new Date().fp_incr(15),
        inline: true,
        dateFormat: "d-m-y",
    });

    const venueReq = await fetch("https://fantastic-bull-life-jacket.cyclic.app/api/halls");
    venueData = await venueReq.json();
    console.log(venueData);
}

renderCalendar();

const getData = async () => {

    const venueReq = await fetch("https://fantastic-bull-life-jacket.cyclic.app/api/halls");
    venueData = await venueReq.json();

    console.log(JSON.stringify(venueData[0]));

    venueData.forEach((cardData)=> {
        renderedCards += 
        `<div class="hall-card">
            <div class="hall-img">
                <img src="${cardData.imgUrl}" alt="${cardData.hallName}">
            </div>
            <div class="hall-info ff-inter">
                <div class="hall-name-star">
                    <h3 class="hall-name"> ${cardData.hallName} </h3>
                    <h3 class="hall-rating">⭐ ${cardData.rating}</h3>
                </div>
                <p>${cardData.seatingCapacity}</p>
                <p>${cardData.isReseverd?"Reserved":"Unreserved"}</p>
            </div>
            <a href="#" class="butt-main details-btn ff-inter fs-s" data-venue="${cardData.hallName}">DETAILS</a>
        </div>\n`; 
    }); 

    cardsContainer.innerHTML = `<div class="overlay overlay-hidden"></div>
    <div class="popup-modal-wrapper popup-hidden"></div>` + renderedCards;

    // console.log(cardsContainer.innerHTML);

    document.querySelectorAll(".details-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(e.target.dataset.venue);
        });
    });
}

const userMenu = document.querySelector(".user-menu");
const cardsContainer = document.querySelector(".cards-container");

document.querySelector(".user-nav").addEventListener("focus", (e)=>{
    e.preventDefault();
    userMenu.classList.toggle("user-menu-hidden");
});

var renderedCards = '';

// card data
// distFromGate
// hallName
// imgUrl
// isReserved
// isAvailable
// hasAC
// carouselPics
// projectorAvailable
// rating
// reservedBy
// seatingCapacity

var modal;
var overlay;

function openModal(venue) {
    modal = document.querySelector(".popup-modal-wrapper");
    overlay = document.querySelector(".overlay");

    if (screen.width <= 500) document.body.classList.toggle("body-noscroll");

    overlay.classList.toggle("overlay-hidden");
    modal.classList.toggle("popup-hidden");
    if (!modal.classList.contains("popup-hidden")) {
        renderModal(venue);
    }
}

function renderModal(venue){
    const hallMarkup = venueData.filter((hall) => hall.hallName === venue).map((hall) => {
        return `<div class="close-btn-wrapper"><a href="#" class="close-btn ff-inter fs-2s fw-500"><i data-feather="x"></i>  </a></div>
            <div class="popup-modal">
                <div class="swiper">
                    <div class="swiper-wrapper">
                    ${hall.carouselPics.map((img) =>  `<div class="swiper-slide"><img src=${img}></div>`).join('\n')}
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
                
                <div class="popup-details">
                    <div class="venue-info">
                        <h2 class="ff-inter fw-600">${hall.hallName}, ${hall.campus}</h2>
                        <hr class="hr-venue"/>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Number of seats: ${hall.seatingCapacity}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Has AC? ${hall.hasAC?'Yes':'No'}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Is projector available? ${hall.projectorAvailable?'Yes':'No'}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Is the hall reserved? ${hall.isReserved?'Yes':'No'}</p>
                        ${hall.isReserved? `<p class="ff-inter fs-2s"><i data-feather="info"></i> Hall reserved by: ${hall.reservedBy}</p>`:''}
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Distance from main gate: ${hall.distFromGate}</p>
                    </div>
                    <div class="venue-card">
                        <div class="venue-card-details">
                            <!--hall is commonly available for everyone to book ahillaya nu oru field-->
                            <div>
                                ${hall.isAvailable?`<i data-feather="check-circle"></i>
                                <p class="ff-inter fs-2s">This hall is in working condition to reserve.</p>`:`<i data-feather="x-circle"></i>
                                <p class="ff-inter fs-2s">This hall is not in working condition to reserve.</p>`}
                                ${hall.isAvailable?`<p class="ff-inter fs-s" style="margin-top:1rem;">Proceed to book ${auth.currentUser === null?`after logging in`: `as <strong>${auth.currentUser.email}</strong> to confirm dates`}, by clicking the button below</p>`:`<p class="ff-inter fs-s" style="margin-top:1rem;">Contact admin for further help</p>`}
                            </div>
                        </div>
                        ${auth.currentUser === null? `<a href="/login/" class="ff-inter butt-sub sign-in fs-s  ${hall.isAvailable?``:`disabled`}">Login</a>`:`<a href="/book/?hall=${hall.hallName}&hallImg=${hall.imgUrl.split("//")[1]}" class="ff-inter butt-main sign-in fs-s ${hall.isAvailable?``:`disabled`}">Book Now</a>`}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    modal.innerHTML = hallMarkup;
    console.log(hallMarkup);
    feather.replace();

    document.querySelector(".close-btn").addEventListener("click", (e) => {
        e.preventDefault();
        openModal(" ");
    });

    var swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    }); 
}

onAuthStateChanged(auth, (user)=>{
    if (user){
        userMenu.children[0].innerHTML = `
            <h3 class="ff-inter">Welcome, ${user.displayName || user.email}</h3>
            <a class="ff-inter fs-2s user-menu-link log-out" href="#">Log out</a>
            <a class="ff-inter fs-2s user-menu-link" href="/reset/">Reset password</a>
        `;
        document.querySelector(".log-out").onclick = (e) => {
            e.preventDefault();
            signOut(auth).then(()=>{
                location.href = "/";
            }).catch((err)=>{
                console.log("Error occured during Sign out" + err);
            });
        }
    }
});

// getData();