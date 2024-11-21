const elements = document.querySelectorAll('.total li');

for (let el of elements) {
    el.addEventListener('animationend', function (e) {
        el.classList.remove('shake');
    });

    el.addEventListener('mouseover', function (e) {
        el.classList.add('shake')
    })
}