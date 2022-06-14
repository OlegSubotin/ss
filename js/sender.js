const TOKEN = '5305320241:AAGD2bjvktZNTTarIZkoHac4LBtHAxpAtGY';
const CHATID = '-694140044';
const formEl = document.querySelector(".js-form");


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
     e.preventDefault();
    
    let formItems = e.currentTarget.elements
    let page =  formEl.id;
    let name = formItems.name.value;
    let phone = formItems.phone.value;
    let user = { page, name, phone,};

    if (name==='' || phone ===''){
        return alert('все поля должны быть заполнены');
    } else {
        alert('спасибо, мы вам скоро перезвоним')
        let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHATID}&text=PAGE:  ${user.page}  NAME:  ${user.name}  PHONE:  ${user.phone}`;
        fetch(url);
        formEl.reset();
    };
};



