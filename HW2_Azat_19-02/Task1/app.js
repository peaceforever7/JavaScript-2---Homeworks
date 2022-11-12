
let smallBox = document.querySelector(".smallBox");
let position = 0;
let topPosition = 0;
const Move = () => {
    if (position <= 440 && topPosition == 0) {
        position += 16
        smallBox.style.left = `${position}px`;
        setTimeout(Move, 100)
    } else if (position >= 440 && topPosition <= 440) {
        topPosition += 16;
        smallBox.style.top = `${topPosition}px`;
        setTimeout(Move, 100)
    } else if (position > 0 && topPosition < 450) {
        position -= 16
        smallBox.style.left = `${position}px`;
        setTimeout(Move, 100)
    } else if (position >= 0 && topPosition > 0) {
        topPosition -= 16;
        smallBox.style.top = `${topPosition}px`;
        setTimeout(Move, 100)
    }
}
Move()

