import { generateTopBar } from './top-bar/top-bar.js';
import { generateHomePage } from './home/home-page.js';
import { generateMenuPage } from './menu/menu-page.js';
import { generateContactPage } from './contact/contact-page.js';

const topBar = generateTopBar();
const pages = {
	homePage: generateHomePage(),
	menuPage: generateMenuPage(),
	contactPage: generateContactPage(),
};
const pageContent = document.querySelector('#content');
const btns = topBar.querySelectorAll('li');
let currentPage = null;

function tooglePage(page) {
	if (currentPage === pages[page]) return;
	removeChild(pages[currentPage]);
	apendElement(pages[page]);
	currentPage = page;
	activeButton(currentPage);
}

function apendElement(element) {
	pageContent.appendChild(element);
}

function removeChild(child) {
	if (child == null) return;
	pageContent.removeChild(child);
}

function activeButton() {
	for (let i = 0; i < btns.length; i++) {
		if (btns[i].id === currentPage) {
			btns[i].classList.add('active');
		} else {
			btns[i].classList.remove('active');
		}
	}
}

apendElement(topBar);
tooglePage('homePage');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		tooglePage(e.target.id);
	});
});
