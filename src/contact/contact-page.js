import './contact-style.css';

function generateContactPage() {
	const contact = document.createElement('section');
	contact.id = 'contact';

	const contactInfo = createInfo();

	contact.appendChild(contactInfo);

	return contact;
}

function createInfo() {
	const container = document.createElement('div');
	container.classList.add('container');

	const title = document.createElement('div');
	title.classList.add('title');
	title.textContent = 'Chef Francesco';

	const img = document.createElement('div');
	img.classList.add('perfil-img');

	const ul = getContacts();

	container.appendChild(title);
	container.appendChild(img);
	container.appendChild(ul);

	return container;
}

function getContacts() {
	const contacts = ['Phone: 5555-555', 'Restaurant: 5656-444'];
	const links = ['cheffrancesco@hotmail.com', 'youtube.com/@cheffrancesco'];
	const ul = document.createElement('ul');
	const lis = [];

	for (let i = 0; i < contacts.length; i++) {
		let li = document.createElement('li');
		li.textContent = contacts[i];
		lis.push(li);
	}

	for (let i = 0; i < links.length; i++) {
		let li = document.createElement('li');
		let link = document.createElement('a');
		link.textContent = links[i];
		li.appendChild(link);
		lis.push(li);
	}

	lis.forEach((li) => {
		ul.appendChild(li);
	});

	return ul;
}

export { generateContactPage };
