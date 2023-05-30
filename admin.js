
const bookingData = [
    [
        "Alpha Hall",
        "muthuvel.rd@sairam.edu.in",
        {
            "endDate": "2023-05-10",
            "startDate": "2023-05-18",
            "startTime": "09:00:00",
            "endTime": "04:00:00",
            purpose: "Googe seminar"
        }
    ],
    [
        "Beta Hall",
        "hod.it@sairamit.edu.in",
        {
            "endTime": "12:00:00",
            "startTime": "09:40:00",
            "startDate": "2023-05-23",
            "endDate": "2023-05-27",
            purpose: "Hack-Riot 24-hour hackathon"
        }
    ]
];

var modal;
var overlay;

const slugify = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(e.target.dataset.venue);
    })
});

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
    const hallMarkup = bookingData.filter((hall) => slugify(hall[0]) === venue).map((hall) => {
        return `<div class="close-btn-wrapper"><a href="#" class="close-btn ff-inter fs-2s fw-500""><i data-feather="x"></i>  </a></div>
            <div class="popup-modal">
              
                <div class="popup-details booking-details">
                    <div class="venue-info">
                        <h2 class="ff-inter fw-600">${hall[0]}</h2>
                        <hr class="hr-venue"/>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Reserved by: ${hall[1]}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Start Date: ${hall[2].startDate}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> End Date ${hall[2].endDate}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Start Time: ${hall[2].startTime}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> End Time: ${hall[2].endTime}</p>
                        <p class="ff-inter fs-2s"><i data-feather="info"></i> Purpose: ${hall[2].purpose}</p>
                    </div>
                    <div class="venue-card">
                        <div class="venue-card-details">
                            <!--hall is commonly available for everyone to book ahillaya nu oru field-->
                            <div>
                                <i data-feather="check-circle"></i>
                                <p class="ff-inter fs-2s">This hall is in working condition and is ready to reserve.</p>
                                <input type="checkbox"><span class="ff-inter fs-s fw-500"> Check here is this hall is not in working condition</span></input>
                            </div>
                        </div>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; width: 100%">
                            <a href="#" class="ff-inter fs-s fw-500 butt-sub butt-accept">Accept</a>
                            <a href="#" class="ff-inter fs-s fw-500 butt-sub butt-deny">Deny</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    modal.innerHTML = hallMarkup;
    feather.replace();
    document.querySelector(".close-btn").addEventListener("click", (e) => {
        e.preventDefault();
        openModal(" ");
    });
    document.querySelector(".butt-accept").addEventListener("click", (e) => {
        e.preventDefault();
        putMsg("Accepted successfully", true);
    });
    document.querySelector(".butt-deny").addEventListener("click", (e) => {
        e.preventDefault();
        putMsg("Request denied", false);
    });
}

feather.replace();