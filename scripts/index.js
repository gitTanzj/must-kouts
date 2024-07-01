//image carousel using the background image of the container
let imageIndex = 0;
const carouselImages = [
    "/assets/img/mustkõuts-visittorva-visitestonia.jpg",
    "/assets/img/mustkõuts-suursaal-visittorva.jpg",
    "/assets/img/mustakõutsi-visittorva-visitestonia.jpg",
    "/assets/img/mustk-visittorva-visitviljandi2.jpg",
    "/assets/img/mustkõuts-terrass-visittorva.jpg",
    "/assets/img/mustkõuts-visittorva1.jpg",
    "/assets/img/puhkenurk-mustkõuts-tõrva.jpg"
];
const imageContainer = document.querySelector(".home-container");
setInterval(() => {
    imageContainer.style.backgroundImage = `url(${carouselImages[imageIndex]})`;
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
}, 5000);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
})


var header = document.getElementById("Header")
var sticky = header.offsetTop


const stickyHeader = () => {
    if (window.pageYOffset  > sticky && window.innerWidth > 1024) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}

window.onscroll = () => stickyHeader()


function myFunction() {
    var header = document.getElementById("headerNav");
    var headerContainer = document.getElementById("Header");
    if (header.className === "header-nav") {
        header.className += " responsive";
        headerContainer.className += " responsive";
    } else {
        header.className = "header-nav";
        headerContainer.className = "header-container";
    }
}


// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var galleryImages = document.getElementsByClassName('gallery-image');
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 