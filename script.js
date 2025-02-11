const password = document.getElementById("Password")
const btn = document.getElementById("btn")
const copy = document.querySelector(".display img")

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loverCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*(){}[+?|_=]/*-"

const allChars = upperCase + loverCase + number + symbol;

function creatpassword(){
    let Password1 = "";
    Password1 += upperCase[Math.floor(Math.random() * upperCase.length)]
    Password1 += loverCase[Math.floor(Math.random() * loverCase.length)]
    Password1 += number[Math.floor(Math.random() * number.length)]
    Password1 += symbol[Math.floor(Math.random() * symbol.length)]


    while (length > Password1.length) {
        Password1 += allChars[Math.floor(Math.random() * allChars.length)]
    }
    password.value = Password1;
}
function copypassword(){
    password.select()
    document.execCommand("copy")
}




btn.addEventListener('click', ()=>{
    creatpassword()
})
copy.addEventListener('click', ()=>{
    copypassword()
})