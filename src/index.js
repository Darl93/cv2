import { sections } from './model';
import './styles/main.css';

const $content = document.querySelector('#cv');


// sections.forEach(section => {
//     const template = templates[section.type];
//     const html = template(section);
//     $content.insertAdjacentHTML('beforeend', html)
// });


//ПРИМЕР ТОГО, КАК ДОБАВИТЬ ТЕКСТ В КОНЕЦ ЭЛЕМЕНТА main
// sections.forEach(section => {
//     let html = '<h2>Hello from JS</h2>';
//     $content.insertAdjacentHTML('beforeend', html)
// })

/**
 * Шаг 4
 * Расскоментировать новую реализацию рендера секций
 * Код выше можно удалить
 */
sections.forEach(section => {
    $content.insertAdjacentHTML('beforeend', section.toHTML())
})
