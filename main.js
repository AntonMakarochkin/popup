let btn = document.querySelector("#open-modal");
let popup = document.querySelector(".popup");
let close1 = document.querySelector(".close");
let field = document.querySelector(".field");
let input = document.querySelector(".oke1");
let copy = document.querySelector("button");

btn.onclick = ()=>{
    popup.classList.toggle("show");
}
close1.onclick = ()=>{
    btn.click();
}

