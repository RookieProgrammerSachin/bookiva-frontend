import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config.js";

feather.replace();

const userMenu = document.querySelector(".user-menu");

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
        document.querySelector(".log-out").onclick = (e) => {
            e.preventDefault();
            signOut(auth).then(()=>{
                location.href = "/";
            }).catch((err)=>{
                console.log("Error occured during sign out" + err);
            });
            
        }

    }else{
        console.log("User not logged in");
    }
});

