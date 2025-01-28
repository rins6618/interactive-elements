import './styles/common.css';
import DropdownMenu from './DropdownMenu';
import ImageCarousel from './ImageCarousel';
import 'iconify-icon';

console.log('Hello, world!');

const dropdownElements = document.querySelectorAll('.dropdown');
dropdownElements.forEach((elem) => {
  const listOfElements = [...elem.querySelectorAll('ul > li')];

  const dropdown = new DropdownMenu(elem, listOfElements);
  dropdown.getActiveElement();
  // dropdown.log();
});

// eslint-disable-next-line no-unused-vars
const carousel = new ImageCarousel(document.querySelector('.carousel'));
