var header = document.querySelector("header");
window.addEventListener('wheel',function(event){
    if(event.deltaY<10){
        header.style.visibility ="visible";
    }else if(event.deltaY >0){
        header.style.visibility ="hidden";
        header.style.backgroundColor ="black";
    }
})


var closelistEl = document.querySelector(".close-list");
closelistEl.addEventListener('click', ()=>{
    closelistEl.classList.remove('show');
})


var menuEl = document.getElementById("menu");
menuEl.addEventListener('click', ()=>{
    closelistEl.classList.add('show');
})


window.addEventListener('scroll',()=>{
    closelistEl.classList.remove('show');
})

