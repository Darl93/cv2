
let $navbarListUl = document.createElement('ul');
let navbarNav = document.querySelector('#navbar');
navbarNav.append($navbarListUl);


const navbarItems = [
    {type: 'home', value: 'Home'},
    {type: 'about', value: 'About'},
    {type: 'resume', value: 'Resume'},
    {type: 'contacts', value: 'Contacts'},
];

navbarItems.forEach(item => {
    let html = '';
    if (item.type === 'home') {
      html = home (item);
    } else if (item.type === 'about') {
      html = about (item);
    } else if (item.type === 'resume') {
      html = resume (item);
    } else if (item.type === 'contacts') {
      html = contacts (item);
    }

    $navbarListUl.insertAdjacentHTML('beforeend', html);
});

function home(item) {
    return `
    <li><a href="#hero" class="nav-link scrollto"><i class="bi bi-house-door"></i> <span>${item.value}</span></a></li>`

};

function about(item) {
    return `
    <li><a href="#about" class="nav-link scrollto"><i class="bi bi-person"></i> <span>${item.value}</span></a></li>`
};

function resume(item) {
    return `
    <li><a href="#about" class="nav-link scrollto"><i class="bi bi-book"></i><span>${item.value}</span></a></li>`
};

function contacts(item) {
    return`
    <li><a href="#about" class="nav-link scrollto"><i class="bi bi-envelope-open"></i></i><span>${item.value}</span></a></li>`
};







