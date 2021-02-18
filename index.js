const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto inventore fugiat cumque totam quaerat impedit deleniti excepturi odit veritatis ad? Tempora placeat cupiditate quas ipsum possimus rem illo facere est.';
const sections = [
    {type: 'title', value: 'Hello World!'},
    {type: 'text', value: loremText},
    {type: 'columns', value: [loremText, loremText, loremText]}
];

const $content = document.querySelector('#cv');

//ПРИМЕР ТОГО, КАК ДОБАВИТЬ ТЕКСТ В КОНЕЦ ЭЛЕМЕНТА main
// sections.forEach(section => {
//     let html = '<h2>Hello from JS</h2>';
//     $content.insertAdjacentHTML('beforeend', html)
// })

sections.forEach(section => {
    let html = '';

    if (section.type === 'title') {
        html = `
        <section class="row">
        <div class="col-sm">
          <h2>${section.value}</h2>
        </div>
        </section>`;

        
    } else if (section.type === 'text') {
        html = `
        <section class="row">
          <div class="col-sm">
            <p>${section.value}</p>
          </div>
        </section>`;
        

    } else if (section.type === 'columns') {
        html = `
        `

    }
    $content.insertAdjacentHTML('beforeend', html)
});
