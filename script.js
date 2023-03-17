const email = document.querySelector("#email")
const txt = document.querySelector("#e-txt")
const btn = document.querySelector("#btn")
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
btn.addEventListener("click", (e) =>{
    if(!regex.test(email.value)){
        e.preventDefault();
        txt.style.display = "block"
        email.style.borderColor = "hsl(354, 100%, 66%)"
    }else{
        txt.style.display = "none"
        email.style.borderColor = "hsl(223, 100%, 88%)"
    }
})