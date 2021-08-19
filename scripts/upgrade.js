

const chooseItems = document.querySelectorAll('.upgrade-section-2 .content .choose .choose-item');

const items = document.querySelectorAll('.upgrade-section-2 .content .chosen-content .item')

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems[1].classList.add('active')
    items[1].classList.add('active')
})

btn2.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems[2].classList.add('active')
    items[2].classList.add('active')
})

btn3.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems.forEach(item => {
        item.classList.remove('active');
    })
    chooseItems[3].classList.add('active')
    items[3].classList.add('active')
})