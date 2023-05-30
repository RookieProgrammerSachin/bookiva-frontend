import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import printJS from "print-js";

const firebaseConfig = {
    apiKey: "AIzaSyCyHr3B3mRWHS9NQ-ezaXA6JFsT8Jw31ng",
    authDomain: "quick-test-6788e.firebaseapp.com",
    projectId: "quick-test-6788e",
    storageBucket: "quick-test-6788e.appspot.com",
    messagingSenderId: "175116675341",
    appId: "1:175116675341:web:702181b854ca82ca0de844",
    measurementId: "G-1JL4J7D26D"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

var dataset, hallReservedOnly, reservedDB = [];

const dbSnapShot = collection(db, "user-data");

const getDataset = async () => {
    dataset = await getDocs(dbSnapShot);
    hallReservedOnly = dataset.docs.filter((eachdoc) => eachdoc.data().hasReserved);
    hallReservedOnly.forEach((hallDoc) => console.log(hallDoc.data())); //filtered collection of users having resreved a hall
    hallReservedOnly.forEach(async (x) => {
        const y = await getDocs(collection(db, `user-data/${x.id}/hallsReserved`));
        // y.forEach((b) => console.log(b.data()));
        y.forEach((b) => reservedDB.push([b.id, x.id, b.data()]));
    });
}

getDataset();

feather.replace();

const slugify = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const URLParams = new URLSearchParams(location.href.split("/").slice(4, ).toString().split(",").join("/"));
const selectedHall = URLParams.get("hall");
document.querySelector(".hall-name").innerHTML = selectedHall;
document.querySelector(".hall-image").setAttribute("src","https://"+URLParams.get("hallImg"));

const userMenu = document.querySelector(".user-menu");
const startDateElem = document.querySelector("#from-date");
const endDateElem = document.querySelector("#end-date");
const startTimeElem = document.querySelector("#from-time");
const endTimeElem = document.querySelector("#end-time");

const msgBox = document.querySelector(".msg-box");
let msgContent = '';

const putMsg = (msg, success) => {
    msgBox.innerHTML = `<div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">${success?'<i data-feather="check-circle"></i><p class="ff-inter fs-s fw-500">Success:</p>':'<i data-feather="x-circle"></i><p class="ff-inter fs-s fw-500">Issues found:</p>'} </div>`;
    msgBox.innerHTML += `${msg}`;
    feather.replace();
    msgBox.classList.remove("msg-box-hidden");
    clearMsg();
}

// [
//     [
//         "beta-hall",
//         "muthuvel.rd@sairam.edu.in",
//         {
//             "endDate": "2023-05-10",
//             "startDate": "2023-05-18",
//             "startTime": "09:00:00",
//             "endTime": "04:00:00"
//         }
//     ],
//     [
//         "alpha-hall",
//         "sit21it063@sairamtap.edu.in",
//         {
//             "endTime": "12:00:00",
//             "startTime": "09:40:00",
//             "startDate": "2023-05-23",
//             "endDate": "2023-05-27"
//         }
//     ]
// ]

const validateDB = () => {
    console.log("varudhu");
    msgContent = '';
    let startDate = new Date(startDateElem.value).toJSON().slice(0, 10); 
    let endDate = new Date(endDateElem.value).toJSON().slice(0, 10);
    let startTime = new Date(startDateElem.value + " " + startTimeElem.value);
    let endTime = new Date(endDateElem.value + " " + endTimeElem.value);

    if (reservedDB.filter((r) => slugify(selectedHall) === r[0]).length === 0){
        printJS({printable: document.getElementById("bruh"), type: 'html', css: "/style.css"});
        putMsg(msgContent, true);
        return;
    }

    reservedDB.forEach((reservation) => {
        let reserveStartDate = new Date(reservation[2].startDate).toJSON().slice(0,10);
        let reserveEndDate = new Date(reservation[2].endDate).toJSON().slice(0,10);
        let reserveStartTime = new Date(reservation[2].startDate + " " + reservation[2].startTime);
        let reserveEndTime = new Date(reservation[2].endDate + " " + reservation[2].endTime);

        let noError = false;

        console.log(slugify(selectedHall), reservation[0]);

        if (slugify(selectedHall) === reservation[0]){
            console.log("no desnsion");
            console.log(reserveStartDate, reserveEndDate);
            if (reserveStartDate >= startDate && reserveStartDate <= endDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Their start date (${reserveStartDate}) falls between your reserved dates (${startDate} to ${endDate})</p></div>`;
            }else if (reserveEndDate >= startDate && reserveEndDate <= endDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Their end date (${reserveEndDate}) falls between your reserved dates (${startDate} to ${endDate})</p></div>`;
            }else if (startDate >= reserveStartDate && startDate <= reserveEndDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your start date (${startDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
            }else if (endDate >= reserveStartDate && endDate <= reserveEndDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your end date (${endDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
            }else if (startDate <= reserveStartDate && endDate >= reserveEndDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your chosen dates (${startDate} to ${endDate}) covers their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
            }else if (reserveStartDate <= startDate && reserveEndDate >= endDate){
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">This hall has already been reserved by <strong>${reservation[1]}</strong> from ${reserveStartDate} to ${reserveEndDate}</p></div>`
                msgContent += `<br><div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;"><i data-feather="info"></i><p class="ff-inter fs-2s">Your chosen dates (${startDate} to ${endDate}) falls between their reserved dates (${reserveStartDate} to ${reserveEndDate})</p></div>`;
            }else{
                console.log("state 1 suckses");
                noError = true;
                printJS({printable: document.getElementById("bruh"), type: 'html', css: "/style.css"});
                putMsg(msgContent, true);
                return;
            }
        }
    
        putMsg(msgContent, noError);
        return;
        
    });
}

const clearMsg = () => {
    setTimeout(() => {
        msgBox.classList.add("msg-box-hidden");
    }, 5000);
}

document.querySelector(".user-nav").addEventListener("click", (e)=>{
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

const formElem = document.querySelector(".booking-form");
let checkDB = false;

const checkFormValidity = () => {
    msgContent = '';

    let currentDate = new Date().toJSON().slice(0, 10);
    let startDate = new Date(startDateElem.value).toJSON().slice(0, 10); 
    let endDate = new Date(endDateElem.value).toJSON().slice(0, 10);
    let startTime = new Date(startDateElem.value + " " + startTimeElem.value);
    let endTime = new Date(endDateElem.value + " " + endTimeElem.value);

    let dateError = false;
    let timeError = false;

    if (currentDate > startDate || currentDate > endDate){
        console.log("invalid date");
        dateError = true;
        msgContent += '<p class="ff-inter fs-2s">• Given dates are invalid</p>';
        //popup set invalid date
    }else{
        if (startDate > endDate){
            console.log("date perusu");
            dateError = true;
            msgContent += '<p class="ff-inter fs-2s">• Start date is bigger</p>'
            //popup set start date big
        }else{
            console.log("correct date");
        }
    }

    if (startTime > endTime){
        console.log("time perusu");
        timeError = true;
        //popup set invalid time
    }else{
        console.log("time okay");
    }

    if (dateError || timeError){
        putMsg(`${msgContent} ${timeError?`<br><p class="ff-inter fs-2s">• Start time is later than end time</p>`:``}`, false);
        checkDB = false;
    }else{
        checkDB = true;
    }
    // console.log(startDate, endDate, startTime, endTime, currentDate);
}

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    checkFormValidity();
    console.log(reservedDB);
    if (checkDB) validateDB();
})