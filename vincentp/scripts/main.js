import RubberSpan from "./rubberspan.js";
import Slider from "./slider.js";

const images = [
    "images/supportpage.jpg", "images/loginpage.jpg", "images/mangapage.jpg",
    "images/supportpage.jpg", "images/loginpage.jpg",
]

RubberSpan(document.getElementById("heroText"), {letters:"Manga.ly", hero:true, emoji:"✨"});
Slider(document.getElementById("Screenshots"), images, 3000);

VanillaTilt.init(document.querySelectorAll(".mySlides"), {
    max: 25,
    speed: 400
});