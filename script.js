let seconds = document.querySelector('#time');

let number = 4;


function showRocket() {
    let rocket = document.querySelector('.rocket');
    let text = document.querySelector('.text-container');
    rocket.style.transition = 'opacity .5s';
    rocket.style.opacity = '1';
    text.style.transition = 'opacity .5s';
    text.style.opacity = '1';
}

let count = setInterval(() => {
    number--;
    seconds.innerHTML = number;
    if(number == 0) {
        clearInterval(count);
        seconds.style.opacity = '0';
        showRocket();
        
    }
}, 1000);