const menuBtn = document.querySelector('.menuBtn > a');
const menuBtnTarget =document.querySelector('.menuWrap');

menuBtn.addEventListener("click", function() {
	menuBtnTarget.classList.toggle('active');
} );
