import { db, auth } from './config.js'; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import printJS from "print-js";


feather.replace();

const slugify = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const URLParams = new URLSearchParams(window.location.search);
const selectedHall = URLParams.get("hall");
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
        await fetch("http://localhost:3000/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
        });
        msgContent = `<p class="ff-inter fs-2s">Booking was confirmed! Check your email for details</p>"`
        putMsg(msgContent, true);
    } catch(e) {

    }
});
    // const validateDB = () => {
    //     console.log("varudhu");
    //     msgContent = '';
    //     let startDate = new Date(startDateElem.value).toJSON().slice(0, 10); 
    //     let endDate = new Date(endDateElem.value).toJSON().slice(0, 10);
    //     let startTime = new Date(startDateElem.value + " " + startTimeElem.value);
    //     let endTime = new Date(endDateElem.value + " " + endTimeElem.value);
    
    //     if (reservedDB.filter((r) => slugify(selectedHall) === r[0]).length === 0){
    //         printJS({printable: document.getElementById("bruh"), type: 'html', css: "/style.css"});
    //         putMsg(msgContent, true);
    //         return;
    //     }
    
    //     reservedDB.forEach((reservation) => {
    //         let reserveStartDate = new Date(reservation[2].startDate).toJSON().slice(0,10);
    //         let reserveEndDate = new Date(reservation[2].endDate).toJSON().slice(0,10);
    //         let reserveStartTime = new Date(reservation[2].startDate + " " + reservation[2].startTime);
    //         let reserveEndTime = new Date(reservation[2].endDate + " " + reservation[2].endTime);
    
    //         let noError = false;
    
    //         console.log(slugify(selectedHall), reservation[0]);
    
    //         if (slugify(selectedHall) === reservation[0]){
    //             console.log("no desnsion");
    //             console.log(reserveStartDate, reserveEndDate);
    //             if (reserveStartDate >= startDate && reserveStartDate <= endDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Their start date (${reserveStartDate}) falls between your reserved dates (${startDate} to ${endDate})</p></div>`;
    //             }else if (reserveEndDate >= startDate && reserveEndDate <= endDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Their end date (${reserveEndDate}) falls between your reserved dates (${startDate} to ${endDate})</p></div>`;
    //             }else if (startDate >= reserveStartDate && startDate <= reserveEndDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your start date (${startDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
    //             }else if (endDate >= reserveStartDate && endDate <= reserveEndDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your end date (${endDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
    //             }else if (startDate <= reserveStartDate && endDate >= reserveEndDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your chosen dates (${startDate} to ${endDate}) covers their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
    //             }else if (reserveStartDate <= startDate && reserveEndDate >= endDate){
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
    //                 msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your chosen dates (${startDate} to ${endDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
    //             }else{
    //                 console.log("state 1 suckses");
    //                 noError = true;
    //                 printJS({printable: document.getElementById("bruh"), type: 'html', css: "/style.css"});
    //                 putMsg(msgContent, true);
    //                 return;
    //             }
    //         }
        
    //         putMsg(msgContent, noError);
    //         return;
            
    //     });
    // }