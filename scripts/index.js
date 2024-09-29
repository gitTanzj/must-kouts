let events = document.getElementsByClassName("events")[0]
let eventNavigators = document.getElementsByClassName('navigate')
if(events.childElementCount > 1){
    eventNavigators.forEach((navigator) => {
        navigator.style.display = "block"
    })
}


//image carousel using the background image of the container
let imageIndex = 0;
const carouselImages = [
    "../assets/img/mustkõuts-visittorva-visitestonia.jpg",
    "../assets/img/mustkõuts-suursaal-visittorva.jpg",
    "../assets/img/mustakõutsi-visittorva-visitestonia.jpg",
    "../assets/img/mustk-visittorva-visitviljandi2.jpg",
    "../assets/img/mustkõuts-terrass-visittorva.jpg",
    "../assets/img/mustkõuts-visittorva1.jpg",
    "../assets/img/puhkenurk-mustkõuts-tõrva.jpg",
];
const imageContainer = document.querySelector(".home-container");
setInterval(() => {
    imageContainer.style.backgroundImage = `url(${carouselImages[imageIndex]})`;
    imageIndex++; 
    if (imageIndex >= carouselImages.length) {
        imageIndex = 0;
    }
}, 5000);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
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
    if (window.scrollY  > sticky && window.innerWidth > 1024) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}

window.onscroll = () => stickyHeader()


function headerFunction() {
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

let eventIndex = 0;
showEvents(eventIndex);

function plusEvents(n) {
    showEvents(eventIndex += n);
}

function showEvents(n){
    let i;
    let events = document.getElementsByClassName("event");
    if (n > events.length) {eventIndex = 1}
    if (n < 1) {eventIndex = events.length}
    for(i = 0; i < events.length; i++) {
        events[i].style.display = "none";
        events[i].style.opacity = "0";
        events[i].style.transform = "translateY(-25px)";
    }
    events[eventIndex-1].style.display = "flex";

    setTimeout(() => {
        events[eventIndex-1].style.opacity = "1";
        events[eventIndex-1].style["transform"] = "translateY(0px)";
    }, 10);
}




// Get the modal
let modal = document.getElementById("imageModal");

let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let galleryImages = document.getElementsByClassName("gallery-image");

for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
};

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 