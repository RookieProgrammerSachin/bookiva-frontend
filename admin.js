import { db, auth } from './config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const userMenu = document.querySelector(".user-menu");

document.querySelector(".user-nav").addEventListener("click", (e)=>{
    // e.preventDefault();
    userMenu.classList.toggle("user-menu-hidden");
});

onAuthStateChanged(auth, async (user)=>{
    if (user.uid === "7JiwkV5dfQO602p5RuGLlOu7Av82"){
        userMenu.children[0].innerHTML = `
            <h3 class="ff-inter">Welcome, ${user.displayName || user.email}</h3>
            <a class="ff-inter fs-2s user-menu-link log-out" href="#">Log out</a>
        `;
        document.querySelector(".log-out").onclick = (e) => {
            e.preventDefault();
            signOut(auth).then(()=>{
                location.href = "/";
            }).catch((err)=>{
                console.log("Error occured during Sign out" + err);
            });
        }

        const reservationsData = await getData(); // getting reservations collection data
        allowed = reservationsData[0];
        denied = reservationsData[1];
        pending = reservationsData[2];
        console.log(pending.reservation);

        //rendering table for pending
        pending.reservation.forEach((pendingData, index) => {
            let row = createPendingTableRow(index + 1, pendingData.reservedHall, pendingData.reserveId, pendingData.reservedBy, pendingData.reservedOn, pendingData.startTime, pendingData.endTime);
            pendingTable.appendChild(row);
            feather.replace()
        });
    }
});

var pending = [];
var allowed = [];
var denied = [];

const pendingTable = document.getElementById("admin-pending-records");

const slugify = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const msgBox = document.querySelector(".msg-box");

const putMsg = (msg, success) => {
    msgBox.innerHTML = `<div style="display:flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">${success?'<i data-feather="check-circle"></i><p class="ff-inter fs-s fw-500">Success:</p>':'<i data-feather="x-circle"></i><p class="ff-inter fs-s fw-500">Issues found:</p>'} </div>`;
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

const getData = async () => {

    try {    
        const adminFetchData = await fetch("http://localhost:3000/api/admin-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: auth.currentUser.uid}),
        })
        const reservationData = await adminFetchData.json();
        // allowed = reservationData[0];
        // denied = reservationData[1]; // use it elsehwere
        // pending = reservationData[2];
        // console.log(allowed, denied, pending);
        return reservationData;
    } catch(err) {
        console.log(err);
    }
}

const createPendingTableRow = (sno, hallName, reservationId, requestedBy, date, startTime, endTime) => {
    let row = document.createElement('tr');
    row.classList.add("ff-inter", "fs-2s");
    row.setAttribute("data-reservationid", reservationId);

    let snoCell = document.createElement('td');
    snoCell.textContent = sno;
    row.appendChild(snoCell);

    let hallNameCell = document.createElement('td');
    hallNameCell.textContent = hallName;
    row.appendChild(hallNameCell);

    let requestedByCell = document.createElement('td');
    requestedByCell.textContent = requestedBy;
    row.appendChild(requestedByCell);

    let dateCell = document.createElement('td');
    dateCell.textContent = date;
    row.appendChild(dateCell);

    let startTimeCell = document.createElement('td');
    startTimeCell.textContent = startTime;
    row.appendChild(startTimeCell);

    let endTimeCell = document.createElement('td');
    endTimeCell.textContent = endTime;
    row.appendChild(endTimeCell);

    let descisionCell = document.createElement('td');
    descisionCell.classList.add("admin-btn-container")

    let acceptBtn = document.createElement("button");
    acceptBtn.classList.add("ff-inter", "fs-2s", "accept-btn");
    acceptBtn.innerHTML = `<i data-feather="check-circle"></i> Accept`;
    acceptBtn.onclick = (e) => acceptRequest(e.target);
    
    let denyBtn = document.createElement("button");
    denyBtn.classList.add("ff-inter", "fs-2s", "deny-btn");
    denyBtn.innerHTML = `<i data-feather="x-circle"></i> Deny`;
    denyBtn.onclick = (e) => denyRequest(e.target);
    
    descisionCell.appendChild(acceptBtn);
    descisionCell.appendChild(denyBtn);
    row.appendChild(descisionCell);

    return row;
}

const denyRequest = (node) => {
    console.log(node.parentNode.parentNode.dataset.reservationid);
    // fetch API call for adding to denied document
    // and remove that specific reservation from pending doc with arrayRemove()?
    // create API endpoints
}

const acceptRequest = (node) => {
    console.log(node.parentNode.parentNode.dataset.reservationid);
    // fetch API call for adding to accpeted document
    // and remove that specific reservation from pending doc with arrayRemove()?
    // create API endpoints
}

const menuBtns = document.querySelectorAll(".admin-menu-link");
const tables = document.querySelectorAll(".admin-data-record");

menuBtns.forEach( menuBtn => {
    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        for(let tableNode of tables) {
            tableNode.classList.add("admin-data-hidden");
            // console.log(tableNode.dataset.state, e.target.dataset.table)
            if(tableNode.dataset.state === e.target.dataset.table) {
                tableNode.classList.remove("admin-data-hidden");
            }
        }
        menuBtns.forEach(btn => {
            btn.classList.remove("admin-menu-link-active");
            e.target.classList.add("admin-menu-link-active");
        })
    })
});

feather.replace();