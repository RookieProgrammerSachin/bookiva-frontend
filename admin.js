import { db, auth } from './config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const userMenu = document.querySelector(".user-menu");

document.querySelector(".user-nav").addEventListener("click", (e)=>{
    // e.preventDefault();
    userMenu.classList.toggle("user-menu-hidden");
});

onAuthStateChanged(auth, async (user)=>{
    if (user && user.uid === "7JiwkV5dfQO602p5RuGLlOu7Av82"){
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

        renderTables();
    }else{
        location.href = '/';
    }
});

var pending = [];
var allowed = [];
var denied = [];

const pendingTable = document.getElementById("admin-pending-records").children[1];
const allowedTable = document.getElementById("admin-allowed-records").children[1];
const deniedTable = document.getElementById("admin-denied-records").children[1];

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
        const adminFetchData = await fetch("https://frail-puce-wear.cyclic.app/api/admin-data", {
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

const createPendingTableRow = (sno, hallName, reservationId, requestedBy, date, startTime, endTime, guest, seats, purpose) => {
    let row = document.createElement('tr');
    row.classList.add("ff-inter", "fs-s");
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
    
    let guestCell = document.createElement('td');
    guestCell.textContent = guest;
    guestCell.style.maxWidth = "8rem";
    row.appendChild(guestCell);
    
    let seatsCell = document.createElement('td');
    seatsCell.textContent = seats;
    row.appendChild(seatsCell);
    
    let purposeCell = document.createElement('td');
    purposeCell.textContent = purpose;
    purposeCell.style.maxWidth = "8rem";
    row.appendChild(purposeCell);

    let descisionCell = document.createElement('td');
    descisionCell.classList.add("admin-btn-container")

    let acceptBtn = document.createElement("button");
    acceptBtn.classList.add("ff-inter", "fs-2s", "accept-btn");
    acceptBtn.innerHTML = `Accept`;
    acceptBtn.onclick = (e) => {
        acceptRequest(e.target);
    }
    
    let denyBtn = document.createElement("button");
    denyBtn.classList.add("ff-inter", "fs-2s", "deny-btn");
    denyBtn.innerHTML = `Deny`;
    denyBtn.onclick = (e) => {
        denyRequest(e.target);
    }
    
    descisionCell.appendChild(acceptBtn);
    descisionCell.appendChild(denyBtn);
    row.appendChild(descisionCell);

    return row;
}

const createAllowedTableRow = (sno, hallName, reservationId, requestedBy, date, startTime, endTime, guest, seats, purpose) => {
    let row = document.createElement('tr');
    row.classList.add("ff-inter", "fs-s");
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
    
    let guestCell = document.createElement('td');
    guestCell.textContent = guest;
    guestCell.style.maxWidth = "8rem";
    row.appendChild(guestCell);
    
    let seatsCell = document.createElement('td');
    seatsCell.textContent = seats;
    row.appendChild(seatsCell);
    
    let purposeCell = document.createElement('td');
    purposeCell.textContent = purpose;
    purposeCell.style.maxWidth = "8rem";
    row.appendChild(purposeCell);

    return row;
}

const createDeniedTableRow = (sno, hallName, reservationId, requestedBy, date, startTime, endTime, guest, seats, purpose) => {
    let row = document.createElement('tr');
    row.classList.add("ff-inter", "fs-s");
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
    
    let guestCell = document.createElement('td');
    guestCell.textContent = guest;
    guestCell.style.maxWidth = "8rem";
    row.appendChild(guestCell);
    
    let seatsCell = document.createElement('td');
    seatsCell.textContent = seats;
    row.appendChild(seatsCell);
    
    let purposeCell = document.createElement('td');
    purposeCell.textContent = purpose;
    purposeCell.style.maxWidth = "8rem";
    row.appendChild(purposeCell);

    return row;
}

const denyRequest = async (node) => {
    const rId = node.parentNode.parentNode.dataset.reservationid;
    console.log(rId);
    // fetch API call for adding to denied document
    // and remove that specific reservation from pending doc with arrayRemove()?
    // create API endpoints
    try {
        await fetch("https://frail-puce-wear.cyclic.app/api/admin-deny",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                reserveId: rId,
                id: auth.currentUser.uid
            })
        });
        putMsg(`<p class="ff-inter fs-2s">Succesfully denied booking</p>`, true);
        renderTables();
    } catch(err) {
        console.log(err);
        putMsg(`<p class="ff-inter fs-2s">Error in denying booking. Try again or contact help.</p>`, false);
    }
}

const acceptRequest = async (node) => {
    const rId = node.parentNode.parentNode.dataset.reservationid;
    console.log(rId);
    // fetch API call for adding to accpeted document
    // and remove that specific reservation from pending doc with arrayRemove()?
    // create API endpoints
    try {
        await fetch("https://frail-puce-wear.cyclic.app/api/admin-accept",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                reserveId: rId,
                id: auth.currentUser.uid
            })
        });
        putMsg(`<p class="ff-inter fs-2s">Succesfully accepted booking</p>`, true);
        renderTables();
    } catch(err) {
        console.log(err);
        putMsg(`<p class="ff-inter fs-2s">Error in accepting booking. Try again or contact help.</p>`, false);
    }

}

const renderTables = async () => {
    pendingTable.innerHTML = '';
    allowedTable.innerHTML = '';
    deniedTable.innerHTML = '';

    const reservationsData = await getData(); // getting reservations collection data
    allowed = reservationsData[0];
    denied = reservationsData[1];
    pending = reservationsData[2];
    console.log(pending.reservation);

    //rendering table for pending
    pending.reservation.forEach((pendingData, index) => {
        let row = createPendingTableRow(index + 1, pendingData.reservedHall, pendingData.reserveId, pendingData.reserverName || pendingData.reservedBy, pendingData.reservedOn, pendingData.startTime, pendingData.endTime, pendingData.guest, pendingData.seats, pendingData.purpose);
        pendingTable.appendChild(row);
        feather.replace()
    });

    allowed.reservation.forEach((allowedData, index) => {
        let row = createAllowedTableRow(index + 1, allowedData.reservedHall, allowedData.reserveId, allowedData.reserverName || allowedData.reservedBy, allowedData.reservedOn, allowedData.startTime, allowedData.endTime, allowedData.guest, allowedData.seats, allowedData.purpose);
        allowedTable.appendChild(row);
    });

    denied.reservation.forEach((deniedData, index) => {
        let row = createDeniedTableRow(index + 1, deniedData.reservedHall, deniedData.reserveId, deniedData.reserverName || deniedData.reservedBy, deniedData.reservedOn, deniedData.startTime, deniedData.endTime, deniedData.guest, deniedData.seats, deniedData.purpose)
        deniedTable.appendChild(row);
    });
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