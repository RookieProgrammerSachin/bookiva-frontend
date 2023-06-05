import{f as t,a as n}from"./config-58d19dce.js";document.querySelector(".sign-in").addEventListener("click",r=>{r.preventDefault();let e=document.querySelector(".input-box").value;e&&t(n,e).then(s=>{console.log("Password reset link sent successfully"),document.querySelector(".form-container").innerHTML=`
            <h3 class="ff-inter fs-2s fw-500">Password reset link sent successfully to ${e}</h3>
            <h4 class="ff-inter fs-s fw-400">You can click <a href="/login/" class="ff-inter fs-s">this link</a> after resetting your password to Login again</h4>
            `}).catch(s=>{document.querySelector(".form-container").innerHTML=`
            <h3 class="ff-inter fs-2s fw-500" style="color:red">Error resetting password for ${e}</h3>
            <h4 class="ff-inter fs-s fw-400">You can click <a href="/reset/" class="ff-inter fs-s">this link</a> to try again</h4>
            `,console.log("An error occured"+s)})});
