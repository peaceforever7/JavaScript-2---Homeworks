let position = 0;
function recursionMiniblock() {
    position = position + 10;
    if(position === 500) return;
    document.querySelector(".miniblock").style.left = position + "px";
    Miniblock();
} 
function Miniblock() {
    setTimeout(recursionMiniblock,100);
}
Miniblock();