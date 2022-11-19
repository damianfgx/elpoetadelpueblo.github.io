const header = document.querySelector('#header');

	const toggleHeader = () =>
		header.classList[window.scrollY > 0 ? 'add' : 'remove']('scroll');

	document.addEventListener('scroll', toggleHeader);
