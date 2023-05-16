const box = document.querySelectorAll('.box');
const img = document.querySelector('.image__block');
const esc = document.querySelector('.esc');
box.forEach((el) => {
	el.addEventListener('click', () => {
		img.classList.add('vis');
		console.log(img);
		console.log(el.getAttribute('src'));
		img.querySelector('img').setAttribute('src', el.getAttribute('src'));
	})
})

esc.addEventListener('click', () => {
	esc.parentElement.classList.remove('vis');
})