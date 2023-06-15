import './home-style.css';

function generateHomePage() {
	const homeSection = document.createElement('section');
	homeSection.id = 'home';

	const header = createHeader();
	const mainContent = createMainContent();

	homeSection.appendChild(header);
	homeSection.appendChild(mainContent);

	return homeSection;
}

function createHeader() {
	const header = document.createElement('div');
	header.classList.add('header');
	header.classList.add('flex');

	const titleContainer = document.createElement('div');
	titleContainer.classList.add('title-container');
	titleContainer.classList.add('flex');

	const title1 = document.createElement('div');
	title1.classList.add('title');
	title1.textContent = 'Incredibile';

	const title2 = document.createElement('div');
	title2.classList.add('title');
	title2.classList.add('italic');
	title2.textContent = 'Pizza';

	titleContainer.appendChild(title1);
	titleContainer.appendChild(title2);

	header.appendChild(titleContainer);

	return header;
}

function createMainContent() {
	const contentWrapper = document.createElement('div');
	contentWrapper.classList.add('content-wrapper');
	contentWrapper.classList.add('flex');

	const about = createAbout();
	const schedule = createSchedule();

	contentWrapper.appendChild(about);
	contentWrapper.appendChild(schedule);

	return contentWrapper;
}

function createAbout() {
	const about = document.createElement('div');
	about.classList.add('about');

	const contentTitle = createContentTitle('Our History');
	const card = createCard();

	about.appendChild(contentTitle);
	about.appendChild(card);

	return about;
}

function createContentTitle(text) {
	const titleContainer = document.createElement('div');
	titleContainer.classList.add('content-title');

	const title = document.createElement('h2');
	title.textContent = text;

	titleContainer.appendChild(title);

	return titleContainer;
}

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card');

	const imgContainer = document.createElement('div');
	imgContainer.classList.add('img');

	const text = document.createElement('div');
	text.classList.add('text');
	text.textContent =
		'Chef Francesco is one of the most renowned chefs in the world and is passionate about the art of pizza making. With over 30 years of history.';
	card.appendChild(imgContainer);
	card.appendChild(text);

	return card;
}

function createSchedule() {
	const schedule = document.createElement('div');
	schedule.classList.add('schedule');

	const contentTitle = createContentTitle('Schedule');

	const info = createInfo();

	schedule.appendChild(contentTitle);
	schedule.appendChild(info);

	return schedule;
}

function createInfo() {
	const info = document.createElement('div');
	info.classList.add('info');

	const adrees = document.createElement('div');
	adrees.textContent = 'Via Alfonso Lamarmora, 31  IT - 10128, Turin, Italy';

	const hours = createUl();

	info.appendChild(adrees);
	info.appendChild(hours);

	return info;
}

function createUl() {
	const hours = [
		'Sunday: 19pm - 22pm',
		'Monday: close',
		'Tuesday: close',
		'Wednesday: 18pm - 22pm',
		'Thrusday: 18pm - 22pm',
		'Friday: 19pm - 23:30pm',
		'Saturday: 18pm - 23pm',
	];

	const ul = document.createElement('ul');
	const lis = [];

	for (let i = 0; i < hours.length; i++) {
		lis.push(document.createElement('li'));
		lis[i].textContent = hours[i];
		ul.appendChild(lis[i]);
	}

	return ul;
}

export { generateHomePage };
