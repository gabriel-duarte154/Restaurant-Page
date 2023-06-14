const liContent = ['Home', 'Menu', 'Contact'];

function generateTopBar() {
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	const lis = [];

	for (let i = 0; i < 3; i++) {
		lis.push(document.createElement('li'));
		lis[i].textContent = `${liContent[i]}`;
	}

	lis.forEach((li) => {
		ul.appendChild(li);
  });
  
  nav.appendChild(ul);

  return nav
}


export { generateTopBar };