

$('.option').click(function () {
    $('.option').removeClass('active');
    $(this).addClass('active');
})



var img_text = document.querySelector(".img-text");
var text_my_name = document.createElement("h2")
text_my_name.innerText = "Abdulsamet Aybaz";
text_my_name.setAttribute("class", "text-my-name")

addEventListener("resize", () => {

    if (innerWidth <= 768) {
        img_text.appendChild(text_my_name)
    }

}) 



var nav_icon = document.querySelector(".nav-icon");


nav_icon.addEventListener("click", function myNavFunction(){

    $("#nav-items").toggleClass("responsive-nav") ;

}); 




