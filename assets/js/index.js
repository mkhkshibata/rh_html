//メニューボタン
const menuBtn = document.querySelector('.menuBtn > a');

if (menuBtn !== null) {
	const menuBtnTarget =document.querySelector('.menuWrap');

	menuBtn.addEventListener("click", function() {
		menuBtnTarget.classList.toggle('active');
	} );
}


//スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
	smoothScrollTrigger[i].addEventListener('click', (e) => {
		e.preventDefault();
		let href = smoothScrollTrigger[i].getAttribute('href');
		let targetElement = document.getElementById(href.replace('#', ''));
		if (targetElement === null ) return;
		const rect = targetElement.getBoundingClientRect().top;
		const offset = window.pageYOffset;
		const gap = 60;
		const target = rect + offset - gap;
		window.scrollTo({
			top: target,
			behavior: 'smooth',
		});
	});
}
