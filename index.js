
const containerAcc = document.querySelectorAll('.accordions-titles');

containerAcc.forEach(el => {
    const content = el.nextElementSibling;
    const arrowDown = el.querySelector('.icon-down-open-big');

    // ensure content starts closed
    content.classList.add('hidden');

    el.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');
        arrowDown.classList.toggle('hover');

        if (isOpen) {
            content.classList.remove('open');
            content.classList.add('hidden');
        } else {
            content.classList.add('open');
            content.classList.remove('hidden');
        }
    });
});