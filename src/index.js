import './common.css';
import DropdownMenu from './DropdownMenu';

console.log('Hello, world!');

const dropdownElements = document.querySelectorAll('.dropdown');
dropdownElements.forEach((elem) => {
  const dropdown = new DropdownMenu(elem.querySelectorAll('ul > *'));
  dropdown.log();
});
