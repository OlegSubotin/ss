const selectEl = document.querySelector('.js-change-lang');
const allLang = ['ru', 'ua'];

selectEl.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage() {
    let lang = selectEl.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    };
    selectEl.value = hash;
    if (hash === 'ru') {
        return;
    }
    if (hash === 'ua') {
            for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
                };
        }; 
    };
    // for (let key in langArr) {
    //     let elem = document.querySelector('.lng-' + key);
    //     if (elem) {
    //         elem.innerHTML = langArr[key][hash];
    //     };
    // };
}

changeLanguage();