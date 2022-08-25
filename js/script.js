
//menu
let menu__burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
menu__burger.addEventListener("click", (e) => {
     menu.classList.toggle("active");
});

//menu-tariff
const tariff = document.getElementById('tariff');
const subMenu = document.querySelector('.header__submenu');
const main = document.querySelector('.main__content')
tariff.addEventListener('click', () => {
     subMenu.classList.toggle("active1");
     main.classList.toggle("active1");
})



//modal
const add = document.querySelector('.main__add-btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
const body = document.querySelector("body");
add.addEventListener('click', () => {
     modal.style.display = "block";
     body.classList.add("lock");
});
close.addEventListener('click', () => {
     modal.style.display = "none";
     body.classList.remove("lock");
});
window.onclick = function (event) {
     if (event.target == modal) {
          modal.style.display = "none";
          body.classList.remove("lock");
     }
}



//addSection
const sections = document.querySelector('.main__sections')
const addSection = document.querySelector('.button__save')
const mainFormInput = document.querySelector('.input__section');
const mainButtons = document.querySelector('.main__buttons')
addSection.addEventListener('click', () => {
     modal.style.display = "none";
     sections.insertAdjacentHTML('beforeend',
          ` <div class="main__section">
                <div class="main__section-title">${mainFormInput.value}</div>
                <button class="main__section-btn btn-black" onclick="addGroup()"><img src="image/plus_black.svg" alt="">
                Добавить группу</button>
          </div>`
     )
     mainFormInput.value = '';
     mainButtons.style.display = 'block';
     body.classList.remove("lock");
})

//cansel
const cansel = document.querySelector('.button__right-cancel');
cansel.addEventListener('click', () => {
     console.log('sdfg');
     sections.innerHTML = "";
     mainButtons.style.display = 'none';
})

//modal1
const modal1 = document.querySelector('.modal1');
function addGroup() {
     modal1.style.display = "block";
     body.classList.remove("lock");
}
function closeGroup() {
     modal1.style.display = "none";
     body.classList.remove("lock");
}
window.onclick = function (event) {
     if (event.target == modal1) {
          modal1.style.display = "none";
          body.classList.remove("lock");
     }
}


