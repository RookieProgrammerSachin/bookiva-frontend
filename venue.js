import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config.js";
// import flatpickr from "flatpickr";

feather.replace();

var venueData;
var isDateSelected = false;

const renderCalendar = async (venue) => {
    // i think i should pull in data from accepted doc from reservations collection
    // finish admin page and do that, for now, just carry on with venueData dates
    // const dataaa = await fetch(that shit)

    // also much later refer https://flatpickr.js.org/events/ for having orange, red/disabled dates for 
    // partially reserved or fully reserved whatever

    const dummyData = venueData.filter((hall) => hall.hallName === venue);
    const disabledDates = [];
    if (dummyData[0].reservations) dummyData[0].reservations.forEach(date => disabledDates.push(date.reservedOn.split("-").reverse().join("-")));

    console.log(disabledDates);

    flatpickr("#calendar", {
        disable: disabledDates,
        altInput: true,
        minDate: "today",
        maxDate: new Date().fp_incr(15),
        inline: true,
        dateFormat: "d-m-Y",
        onChange: (dates, date, instance) => {
            isDateSelected = true;
            const loginBtn = document.getElementById("login-btn");
            loginBtn.setAttribute("href", `${auth.currentUser === null? `/login/?hall=${dummyData[0].hallName}&hallImg=${dummyData[0].imgUrl.split("//")[1]}&date=${date}`:`/book/?hall=${dummyData[0].hallName}&hallImg=${dummyData[0].imgUrl.split("//")[1]}&date=${date}`}`);
            if(dummyData[0].isAvailable) loginBtn.classList.remove("disabled");
        }
    });
}

const getData = async () => {

    const venueReq = await fetch("https://frail-puce-wear.cyclic.app/api/halls");
    venueData = await venueReq.json();

    console.log(venueData);

    venueData.forEach((cardData) => {
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

document.querySelector(".user-nav").addEventListener("click", (e)=>{
    // e.preventDefault();
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
    modal.innerHTML = '';
    if (!modal.classList.contains("popup-hidden")) {
        renderModal(venue);
    }
}

function renderModal(venue){
    //for login button flatpickr la ndhu dates edhu select panromo adha choose panni, URL param ah anupanum
    isDateSelected = false;

    const hallData = venueData.filter((hall) => hall.hallName === venue);
    const hallMarkup = hallData.map((hall) => {
        return `
            <div class="close-btn-wrapper">
                <a href="#" class="close-btn ff-inter fs-2s fw-500"><i data-feather="x"></i></a></div>
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
                        <div class="venue-calendar ff-inter">
                            <input id="calendar" type="text" placeholder="Select a date">
                            <p class="ff-inter fs-2s">If dates are not clickable, they are already reserved</p>
                        </div>
                        <div class="venue-card">
                        <div class="venue-card-details">
                            <!--hall is commonly available for everyone to book ahillaya nu oru field-->
                            <div>
                                ${hall.isAvailable?`<i data-feather="check-circle"></i>
                                <p class="ff-inter fs-2s">This hall is in working condition to reserve.</p>`:`<i data-feather="x-circle"></i>
                                <p class="ff-inter fs-2s">This hall is not in working condition to reserve.</p>`}
                                ${hall.isAvailable?`<br><p class="ff-inter fs-s">Select a date to enable Book Button</p> <p class="ff-inter fs-s" style="margin-top:1rem;">Proceed to book ${auth.currentUser === null?`after logging in`: `as <strong>${auth.currentUser.email}</strong> to confirm time`}, by clicking the button below</p>`:`<p class="ff-inter fs-s" style="margin-top:1rem;">Contact admin for further help</p>`}
                            </div>
                            </div>
                            ${auth.currentUser === null? `<a href="/login/" id="login-btn" class="ff-inter butt-sub sign-in fs-s  ${hall.isAvailable?``:`disabled`}">Login</a>`:`<a id="login-btn" href="/book/?hall=${hall.hallName}&hallImg=${hall.imgUrl.split("//")[1]}" class="ff-inter butt-main sign-in fs-s ${hall.isAvailable && isDateSelected?``:`disabled`}">Book Now</a>`}
                        </div>
                        
                    </div>
                </div>
        `;
    }).join('');

    modal.innerHTML = hallMarkup;
    // console.log(hallMarkup);
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

    renderCalendar(venue);
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

getData();