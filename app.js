
function navBlack() {
    let nav = document.getElementById('nav-bar');
    
    nav.classList.add('nav-black')

}
window.addEventListener("scroll", function (event) {

    var scroll_y = this.scrollY;
    // var scroll_x = this.scrollX;
    // console.log(scroll_x, scroll_y);
    // position.innerHTML = " X-axis : "
    // + scroll_x + "Y-axis : " + scroll_y
    let nav = document.getElementById('nav-bar');

    if (scroll_y == 0) {
        nav.classList.remove('nav-black')
    }
    else {
        nav.classList.add('nav-black')
    }
});
