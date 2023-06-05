import { db, auth } from './config.js'; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import printJS from "print-js";


feather.replace();

const slugify = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const URLParams = new URLSearchParams(window.location.search);
const selectedHall = URLParams.get("hall");
if (!selectedHall) location.href='/';
document.querySelector(".hall-name").innerHTML = selectedHall;
document.querySelector(".hall-image").setAttribute("src","https://" + URLParams.get("hallImg"));
const selectedDate = URLParams.get("date").split("-").reverse().join("-");
document.querySelector("#date").value = selectedDate;

const userMenu = document.querySelector(".user-menu");

document.querySelector(".user-nav").addEventListener("click", (e)=>{
    e.stopPropagation(); 
    e.preventDefault();
    userMenu.classList.toggle("user-menu-hidden");
});

onAuthStateChanged(auth, (user)=>{
    if (user){
        userMenu.children[0].innerHTML = `
            <h3 class="ff-inter">Welcome, ${user.displayName || user.email}</h3>
            <a class="ff-inter fs-2s user-menu-link log-out" href="#">Log out</a>
            <a class="ff-inter fs-2s user-menu-link" href="/reset/">Reset password</a>
        `;

        document.querySelector("#email").value = user.email;

        document.querySelector(".log-out").onclick = (e) => {
            e.preventDefault();
            signOut(auth).then(()=>{
                location.href = "/";
            }).catch((err)=>{
                console.log("Error occured during sign out" + err);
            });
        }

    }else{
        location.href = "/";
    }
});
const msgBox = document.querySelector(".msg-box");
var msgContent = '';

const submitBtn = document.querySelector(".submit");

// flatpickr("#start-time", {
//     enableTime: true,
//     noCalendar: true,
//     time_24hr: true,
//     minTime: "09:00",
//     maxTime: "18:00",
// });

// flatpickr("#end-time", {
//     enableTime: true,
//     noCalendar: true,
//     time_24hr: true,
//     minTime: "09:00",
//     maxTime: "18:00",
// });

const putMsg = (msg, success) => {
    msgBox.innerHTML = `<div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">${success?'<i data-feather="check-circle"></i><p class="ff-inter fs-s fw-500">Booking was successful! Check your mail for confirmation:</p>':'<i data-feather="x-circle"></i><p class="ff-inter fs-s fw-500">Something went wrong! Please try after some time or contact admin</p>'} </div>`;
    msgBox.innerHTML += `${msg}`;
    feather.replace();
    msgBox.classList.remove("msg-box-hidden");
    clearMsg();
}

const clearMsg = () => {
    setTimeout(() => {
        msgBox.classList.add("msg-box-hidden");
    }, 5000);
}

const form = document.querySelector(".booking-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.innerHTML = `<span class="loader" style="border-top: 3px solid #fff;height: 24px; width: 24px;"></span>`;

    const submissionData = {
        hall: selectedHall,
        id: document.querySelector("#email").value,
        start: document.getElementById("start-time").value,
        end: document.getElementById("end-time").value,
        date: selectedDate.split("-").reverse().join("-"),
        name: document.querySelector("#name").value,
        purpose: document.querySelector("#purpose").value,
        seats: document.querySelector("#seats").value,
        guest: document.querySelector("#guest").value
    }
    console.log(submissionData);

    try{
        await fetch("https://frail-puce-wear.cyclic.app/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
        });
        msgContent = `<p class="ff-inter fs-2s">Booking was confirmed! Check your email for details</p>`
        putMsg(msgContent, true);
        setTimeout(() => {
            location.href = '/';
        }, 3000);
    } catch(e) {
        msgContent = `<p class="ff-inter fs-2s">Error in booking. Try again later!</p>`;
        putMsg(msgContent, false);
        setTimeout(() => {
            location.href = '/';
        }, 3000);
    }
});