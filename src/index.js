import './styles/common.css';
import DropdownMenu from './DropdownMenu';
import ImageCarousel from './ImageCarousel';

console.log('Hello, world!');

const dropdownElements = document.querySelectorAll('.dropdown');
dropdownElements.forEach((elem) => {
  const listOfElements = [...elem.querySelectorAll('ul > li')];

  const dropdown = new DropdownMenu(elem, listOfElements);
  dropdown.getActiveElement();
  // dropdown.log();
});

const carousel = new ImageCarousel(document.querySelector('.carousel'));
setInterval(() => {
  console.log('timeout!');
  carousel.moveSteps();
}, 3000);
