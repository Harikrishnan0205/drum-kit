

const audio1 = new Audio('./music/boom.wav')
const audio2 = new Audio('./music/clap.wav')
const audio3 = new Audio('./music/hihat.wav')
const audio4 = new Audio('./music/kick.wav')
const audio5 = new Audio('./music/openhat.wav')
const audio6 = new Audio('./music/ride.wav')
const audio7 = new Audio('./music/snare.wav')
const audio8 = new Audio('./music/tink.wav');
const audio9 = new Audio('./music/tom.wav');




let box = document.querySelectorAll('#drums');
box.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.querySelector('h3').textContent);
        let selectedBox = item.querySelector('h3').textContent;
        if (selectedBox === 'A') {
            audio2.play();
        } else if (selectedBox === 'S') {
            audio3.play();
        } else if (selectedBox === 'D') {
            audio4.play();
        } else if (selectedBox === 'F') {
            audio5.play();
        } else if (selectedBox === 'G') {
             audio1.play();
        } else if (selectedBox === 'H') {
             audio6.play();
        } else if (selectedBox === 'J') {
             audio7.play();
        } else if (selectedBox === 'K') {
             audio9.play();
        } else if (selectedBox === 'L') {
             audio8.play();
        }

    })
})
