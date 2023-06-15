import './nav-style.css';

const liContent = ['Home', 'Menu', 'Contact'];
const ids = ['homePage', 'menuPage', 'contactPage'];

function generateTopBar() {
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	const lis = [];

	for (let i = 0; i < 3; i++) {
		lis.push(document.createElement('li'));
		lis[i].textContent = liContent[i];
		lis[i].id = ids[i];
	}

	lis.forEach((li) => {
		ul.appendChild(li);
	});

	nav.appendChild(ul);

	return nav;
}

export { generateTopBar };
