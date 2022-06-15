const TOKEN = '5305320241:AAGD2bjvktZNTTarIZkoHac4LBtHAxpAtGY';
const CHATID = '-694140044';
const formEl = document.querySelector(".js-form");
const popupEl = document.getElementById('popup');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
     e.preventDefault();
    
    let formItems = e.currentTarget.elements
    let page =  formEl.id;
    let name = formItems.name.value;
    let phone = formItems.phone.value;
    let user = { page, name, phone,};
    
    let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHATID}&text=PAGE:  ${user.page}  NAME:  ${user.name}  PHONE:  ${user.phone}`;
    fetch(url);
    formEl.reset();
    popupEl.classList.remove('is-hidden');
    window.setTimeout( hidePopup, 2000
    );
};

function hidePopup() {
 popupEl.classList.add('is-hidden');
};

