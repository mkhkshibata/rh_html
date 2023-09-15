	//Swiper
	const thumbSwiper = new Swiper('.swiper-thumb', {
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	})
	const mainSwiper = new Swiper('.swiper-main', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.userImg_btn-next',
			prevEl: '.userImg_btn-prev',
		},
		thumbs: {
			swiper: thumbSwiper
		}
	});