

const chooseItems = document.querySelectorAll('.upgrade-section-2 .content .choose .choose-item');

const items = document.querySelectorAll('.upgrade-section-2 .content .chosen-content .item')

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const form = {
    key: document.getElementById('key'),
    email: document.getElementById('email'),
    pass: document.getElementById('pass'),
};

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


    // REQUESTING FROM HERE

    const requestData = { "key": form.key.value, "email": form.email.value, "pass": form.pass.value };
    const request = new XMLHttpRequest();
    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON');
        }
        if (responseObject) {
            handleResponse(responseObject);
        }
    }
    var path = window.location.pathname;
    var page = path.split("/").pop().split('.')[0];
    console.log(page)
    console.log(requestData);
    request.open('post', `VPS/${page}`) // ADD IP
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestData);
})

function handleResponse(responseObject) {
    if (responseObject.statusCode == 200) {
        items.forEach(item => {
            item.classList.remove('active');
        })
        chooseItems.forEach(item => {
            item.classList.remove('active');
        })
        chooseItems[3].classList.add('active')
        items[3].classList.add('active')
    } else {
        console.log(responseObject.message);
    }


}
