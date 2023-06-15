import './menu.style.css';

function generateMenuPage() {
	const menu = document.createElement('section');
	menu.id = 'menu';

	const title = document.createElement('div');
	title.classList.add('title');
	title.textContent = 'Le Pizzes';

	const gridWrapper = createGridWrapper();

	menu.appendChild(title);
	menu.appendChild(gridWrapper);

	return menu;
}

function createGridWrapper() {
	const grid = document.createElement('div');
	grid.classList.add('grid-wrapper');

	const descriptions = createDescriptions();
	const images = createImages();

	for (let i = 0; i < images.length; i++) {
		grid.appendChild(images[i]);
		grid.appendChild(descriptions[i]);
	}

	return grid;
}

function createDescriptions() {
	const descriptionsText = [
		'This is the wonderful classic pizza, unforgettable flavor. Cheese and pepperoni, perfection.',
		'For the most demanding palates, made with the highest quality ingredients.',
		'Light and smooth, with an invigorating taste, Cheese with pieces of meat.',
		'The house special pizza, made with the best spices in the world.',
	];
	const descriptions = [];

	for (let i = 0; i < descriptionsText.length; i++) {
		descriptions.push(document.createElement('div'));
		descriptions[i].classList.add('description');
		descriptions[i].textContent = descriptionsText[i];
	}

	return descriptions;
}

function createImages() {
	const imgs = [];
	for (let i = 0; i < 4; i++) {
		imgs.push(document.createElement('div'));
		imgs[i].classList.add(`img${i}`);
	}
	return imgs;
}

export { generateMenuPage };
