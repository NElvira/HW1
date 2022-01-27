const images = ["img/Pig.svg", "img/Plane.svg", "img/Ticket.svg"];

images.forEach(el => {
    const img = document.createElement("div");
    img.className = "mini__item";
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener("click", e => 
        showPopup(`<img alt="pic" src="${el}">`) 
   )
    document.body.append(img);
});

const popup = document.querySelector(".popup");
const lightBox = document.querySelector(".lightbox"); // ДЗ № 3 затенить элемента за popup
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

const closePopup = function(e) {
    e.target.parentElement.classList.remove("popup_active")
};

const showPopup = function(text) {
    popup.classList.add("popup_active");
    lightBox.classList.add("lightbox_active"); // ДЗ № 3 затенить элемента за popup
    popupContent.innerHTML = text;
};

popupClose.addEventListener("click", closePopup);
// ДЗ № 2 закрыть popup с помощью esc
document.addEventListener("keydown", function(event){
    if (event.code === "Escape") {
        event.preventDefault();
        document.querySelector(".popup_active").classList.remove("popup_active")
        lightBox.classList.remove("lightbox_active");
    }
})
// ДЗ № 1 при нажатии на поле вне картинки закрывать popup
function ClosePopup(event) {
	if (event.target.parentElement === popupContent || event.target.className === "mini__item") {
	  return;
	} else {
	popup.classList.remove("popup_active");
    lightBox.classList.remove("lightbox_active");
 }}
 
document.addEventListener("click", ClosePopup);



// #hw1 link(git)
// 1 при нажатии на поле вне картинки закрывать popup
// 2 предусмотреть возможность закрытия окошка по нажаьтю на кнопки
//  (keyup/keydown)- esc, - alt+f4 (preventDefault!!!) 
// 3 сделать интерфейс в виде lightbox - все элементы за popup становятся затенеными