import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./config.js"

document.querySelector(".sign-in").addEventListener("click", (e) => {
    e.preventDefault();
    let emailID = document.querySelector(".input-box").value;
    if (emailID){
        sendPasswordResetEmail(auth, emailID)
        .then((result) => {
            console.log("Password reset link sent successfully");
            document.querySelector(".form-container").innerHTML = `
            <h3 class="ff-inter fs-2s fw-500">Password reset link sent successfully to ${emailID}</h3>
            <h4 class="ff-inter fs-s fw-400">You can click <a href="/login/" class="ff-inter fs-s">this link</a> after resetting your password to Login again</h4>
            `; 
        }).catch((err) => {
            document.querySelector(".form-container").innerHTML = `
            <h3 class="ff-inter fs-2s fw-500" style="color:red">Error resetting password for ${emailID}</h3>
            <h4 class="ff-inter fs-s fw-400">You can click <a href="/reset/" class="ff-inter fs-s">this link</a> to try again</h4>
            `;
            console.log("An error occured" + err);
        });
    }
});