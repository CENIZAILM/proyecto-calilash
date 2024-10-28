var button = document.getElementById('botonicon');
var isIcon1 = true;

button.addEventListener('click', function () {
  if (isIcon1) {
    button.classList.remove('btn-dark');
    button.classList.add('btn-secondary');
  } else {
    button.classList.remove('btn-secondary');
    button.classList.add('btn-dark');
  }

  isIcon1 = !isIcon1;
  changeIcon(); // 
});

function changeBackgroundColor() {
  var body = document.body;
  var currentColor = window.getComputedStyle(body).backgroundColor;

  if (currentColor === 'rgb(255, 255, 255)' || currentColor === 'rgba(0, 0, 0, 0)') {
    body.style.backgroundColor = 'black';
    document.body.style.color = 'white'; // 
  } else {
    body.style.backgroundColor = 'white';
    document.body.style.color = 'black'; 
  }
}

function changeIcon() {
  var icon = document.getElementById('icon');

  if (icon.classList.contains('fa-moon')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

window.addEventListener('load', function () {
  changeBackgroundColor(); // Cambia el color de fondo en la carga inicial
});