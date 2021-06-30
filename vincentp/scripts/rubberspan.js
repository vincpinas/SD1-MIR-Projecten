const RubberSpan = (id, props = {}) => {
    let letterArray = [];

    let split = props.letters.split("");
    split.forEach(item => {
        letterArray.push(item)
    });

    function changeAnimation(e) {
        e.target.style.animationName = 'rubberBand'
        e.target.style.animationDuration = '1s'
    }

    function resetAnimation(e) {
        setTimeout(() => {
            e.target.style.animation = 'none';
            e.target.style.animation = '';
        }, 900);
    }

    const rubberContainer = document.createElement("span");
    letterArray.map(item => {
        let text = document.createElement("span");

        text.innerHTML = item;
        text.className = "blast-text";
        text.style.textShadow = props.hero ? "-1px 0 0px #4d43ff, 0 1px 0px #4238ff, -2px 1px 0px #4d43ff, -1px 2px 0px #4238ff, -3px 2px 0px #4d43ff" : null;
            text.onmouseover = changeAnimation;
            text.onmouseleave = resetAnimation;

        rubberContainer.appendChild(text);
    });

    let emoji = document.createElement("span");
    emoji.innerHTML = props.emoji;
    emoji.className = "blast-text";
        emoji.onmouseover = (changeAnimation);
        emoji.onmouseleave = (resetAnimation);
    rubberContainer.appendChild(emoji);

    id.appendChild(rubberContainer);
}

export default RubberSpan;