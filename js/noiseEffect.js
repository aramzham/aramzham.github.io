for(let i = 1; i <= 6; i++) {
	const img = document.querySelector(`.blogs #blog${i} > img`);

	img.addEventListener('mouseover', () => {
	  img.style.filter = `url(#noise${i})`;
	});

	img.addEventListener('mouseout', () => {
	  img.style.filter = 'none';
	}); 
}
