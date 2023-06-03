import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./config.js";

feather.replace();
const URLParams = new URLSearchParams(window.location.search);

const signInBtn = document.querySelector(".sign-in");

signInBtn.onclick = (e) => {
  e.preventDefault();
  signInBtn.innerHTML = "<span class=\"loader\" style=\"border-top: 3px solid #fff;height: 24px; width: 24px;\"></span>";

  const email = document.querySelector(".input-user");
  const pwd = document.querySelector(".input-pwd");

  pwd.style.border = "1px solid #636363c0;";
  email.style.border = "1px solid #636363c0;";
  document.querySelector(".invalid-pwd").style.display = "none";
  document.querySelector(".invalid-email").style.display = "none";

  setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email.value || '', pwd.value || '')
        .then(async (result) => {
          const docRef = doc(db, "user-data", email.value);
          const userReq = await fetch("https://frail-puce-wear.cyclic.app/api/users");
          const userData = await userReq.json();
          console.log(userData);
          if (userData.some((elem) => elem.id === email.value)){
            if (URLParams.get("date") === null) location.href = "/venues/";
            else location.href = "/book/"+window.location.search;
          }else{
              await setDoc(docRef, {
                  hasResetPwd: true,
                  hasReserved: false,
                  reservations: []
              }).then((result) => {
                location.href = "/reset/";
              }).catch((err) => document.querySelector(".form-container").innerHTML = `<h3 class=\"ff-inter\">Error logging in. Try again.</h3>`);
          }
        })
        .catch((err) => {
          console.log(err);
          signInBtn.innerHTML = "Sign In";
          if (err.code === "auth/wrong-password"){
              pwd.style.border = "1px solid red";
              document.querySelector(".invalid-pwd").style.display = "block";
          }else if(err.code === "auth/too-many-requests"){
              document.querySelector(".invalid-pwd").innerHTML = "Too many failed attempts. <br> <a href=\"/reset/\">Reset password</a>";
              document.querySelector(".invalid-pwd").style.display = "block";
          }else if(err.code === "auth/user-not-found"){
              email.style.border = "1px solid red";
              document.querySelector(".invalid-email").style.display = "block";
          }
        });

    }).catch((err) => console.log(err));
};