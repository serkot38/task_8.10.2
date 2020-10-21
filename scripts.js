const button = document.querySelector('button');
button.addEventListener('click', click1);

function click1() {
  alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — '+document.querySelector('#text').value);
}