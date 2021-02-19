
// let $navbarListUl = document.createElement('ul');
// let navbarNav = document.querySelector('#navbar');
// navbarNav.append($navbarListUl);


// const navbarItems = [
//     {type: 'home', value: 'Home'},
//     {type: 'about', value: 'About'},
//     {type: 'resume', value: 'Resume'},
//     {type: 'contacts', value: 'Contacts'},
// ];

// navbarItems.forEach(item => {
//     let html = '';
//     if (item.type === 'home') {
//       html = home (item);
//     } else if (item.type === 'about') {
//       html = about (item);
//     } else if (item.type === 'resume') {
//       html = resume (item);
//     } else if (item.type === 'contacts') {
//       html = contacts (item);
//     }

//     $navbarListUl.insertAdjacentHTML('beforeend', html);
// });

// function home(item) {
//     return `
//     <li><a href="#hero" class="nav-link scrollto"><i class="bi bi-house-door"></i> <span>${item.value}</span></a></li>`

// };

// function about(item) {
//     return `
//     <li><a href="#about" class="nav-link scrollto"><i class="bi bi-person"></i> <span>${item.value}</span></a></li>`
// };

// function resume(item) {
//     return `
//     <li><a href="#about" class="nav-link scrollto"><i class="bi bi-book"></i><span>${item.value}</span></a></li>`
// };

// function contacts(item) {
//     return`
//     <li><a href="#about" class="nav-link scrollto"><i class="bi bi-envelope-open"></i></i><span>${item.value}</span></a></li>`
// };



// //второе решение
//  const links = [
//    {href: '#hero', icon: 'bi-house-door', value: 'Home'},
//    {href: '#about', icon: 'bi-person', value: 'About'},
//    {href: '#resume', icon: 'bi-book', value: 'Resume'},
//    {href: '#contacts', icon: 'bi-envelope-open', value: 'Contacts'},
//  ];

//  const $navbar = document.querySelector('#navbar');
//  const $navbarUl = document.createElement('ul');
//  $navbar.append($navbarUl);

//  links.forEach(link => {
//    let html = navigation(link);
//    $navbarUl.insertAdjacentHTML('beforeend', html);
//  });

//  function navigation(link) {
//    return `<li><a href="${link.href}" class="nav-link scrollto"><i class="bi ${link.icon}">`
//  };




