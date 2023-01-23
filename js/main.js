const showulElements = document.querySelector('.icon');
const ulList = document.querySelector("ul");
const toggleDropdown =  () => {
    ulList.classList.toggle("show");
};
showulElements.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
});
document.documentElement.addEventListener("click",  () => {
    if (ulList.classList.contains("show")) {
    toggleDropdown();
    }
});
window.onkeyup = function (event) {
    if (event.keyCode == 27) {
    ulList.classList.remove("show");
    }
}

