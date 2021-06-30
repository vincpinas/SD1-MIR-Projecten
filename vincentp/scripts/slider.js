const Slider = (id, images = [], timeout = 1000) => {
    let index=0,transform=0;
    let timer = setInterval(function(){showSlides()}, timeout);

    images.map(item => {
        let img = document.createElement("img");
        img.src = item;
        img.className = "mySlides"

        img.onmouseover = () => {clearInterval(timer)}
        img.onmouseleave = () => {timer = setInterval(function(){showSlides()}, timeout)}

        id.appendChild(img)
    })

    const showSlides = () => {
        index += 1
        screen.width > 720 ? transform += 50.2 : transform += 101
        if(index >= images.length-1) {
            transform = 0
            index = 0;
        }

        id.style.transform = `translateX(-${transform}%)`
    }
}

export default Slider;