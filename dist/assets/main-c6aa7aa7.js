import{o as r,s as l,a as n}from"./config-58d19dce.js";feather.replace();const o=document.querySelector(".user-menu");document.querySelector(".user-nav").addEventListener("click",e=>{o.classList.toggle("user-menu-hidden")});r(n,e=>{e?(o.children[0].innerHTML=`
            <h3 class="ff-inter">Welcome, ${e.displayName||e.email}</h3>
            <a class="ff-inter fs-2s user-menu-link log-out" href="#">Log out</a>
            <a class="ff-inter fs-2s user-menu-link" href="/reset/">Reset password</a>
        `,document.querySelector(".log-out").onclick=s=>{s.preventDefault(),l(n).then(()=>{location.href="/"}).catch(t=>{console.log("Error occured during sign out"+t)})}):console.log("User not logged in")});
