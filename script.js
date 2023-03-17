const first_name = document.querySelector("#first-name")
const last_name = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const fn_error = document.querySelector("#fn-e")
const ln_error = document.querySelector("#ln-e")
const em_error = document.querySelector("#em-e")
const pa_error = document.querySelector("#pa-e")

const fn_txt = document.querySelector("#fn-t")
const ln_txt = document.querySelector("#ln-t")
const em_txt = document.querySelector("#em-t")
const pa_txt = document.querySelector("#pa-t")

const first_name_Regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const last_name_Regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password_Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const btn = document.querySelector("#button")

btn.addEventListener("click", (e) => {
    if(!first_name_Regex.test(first_name.value)){
        e.preventDefault();
        fn_error.style.display = "block"
        fn_txt.style.display = "block"
    }else{
        fn_error.style.display = "none"
        fn_txt.style.display = "none"
    }

    if(!last_name_Regex.test(last_name.value)){
        e.preventDefault();
        ln_error.style.display = "block"
        ln_txt.style.display = "block"
    }else{
        ln_error.style.display = "none"
        ln_txt.style.display = "none"
    }

    if(!emailRegex.test(email.value)){
        e.preventDefault();
        em_error.style.display = "block"
        em_txt.style.display = "block"
    }else{
        em_error.style.display = "none"
        em_txt.style.display = "none"
    }

    if(!password_Regex.test(password.value)){
        e.preventDefault();
        pa_error.style.display = "block"
        pa_txt.style.display = "block"
    }else{
        pa_error.style.display = "none"
        pa_txt.style.display = "none"
    }
    
})