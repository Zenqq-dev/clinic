function set_image(b64){
    document.getElementById("qr").src = b64;
}
function make_QR(){
    let data = document.getElementById("data").value
    if (data.length > 0){
        eel.generate_qr(data, eel.predict_weight(data)(eel.qr_version))(set_image);
     }
}
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

function sliders_bild_callback(params) { }

let checkup = new Swiper('.checkup', {
	
	// effect: 'fade',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// observer: true,
	// observeParents: true,
	slidesPerView: 1,
	spaceBetween: 15,
	// autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	// loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},

	 breakpoints: {
		 	320: {
	 		slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},

	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
