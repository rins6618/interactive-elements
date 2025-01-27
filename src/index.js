import './styles/common.css';
import DropdownMenu from './DropdownMenu';

console.log('Hello, world!');

const dropdownElements = document.querySelectorAll('.dropdown');
dropdownElements.forEach((elem) => {
  const listOfElements = [...elem.querySelectorAll('ul > li')];

  const dropdown = new DropdownMenu(elem, listOfElements);
  dropdown.getActiveElement();
  // dropdown.log();
});
