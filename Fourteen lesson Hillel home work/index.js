const images = document.querySelectorAll('.slider img');
const dotsContainer = document.querySelector('.slider-dots');
let currentIndex = 0;
/*
використовувала масив для зберігання зображень та змінну для зберігання індексу поточного зображення
*/
function showImage(index) {
  images[currentIndex].classList.remove('active');
  dotsContainer.children[currentIndex].classList.remove('active');

  images[index].classList.add('active');
  dotsContainer.children[index].classList.add('active');

  currentIndex = index;
}

images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showImage(index));
  dotsContainer.appendChild(dot);
});


document
  .querySelector('.slider-controlls')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      showImage(index);
    }
  });

