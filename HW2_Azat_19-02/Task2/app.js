let counter = 0;

let interval = setInterval (() => {
    counter++
    if (counter ===61) {
        clearInterval(interval)
        alert("60 sec is out!")
    }
    console.log(counter, 'sec');
}, 500); 