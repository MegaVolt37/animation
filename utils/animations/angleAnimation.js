export function animateAngle(gsap, tl) {
	const images = gsap.utils.toArray('.section__angle-cup__image')
	const objSequenceImage = {
		activeIndexImg: 0,
	}
	const tlAngle = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__angle',
			start: 'top top',
			// end: "+=3000",
			scrub: 2,
			// pin: true,
		},
	})
	tl.fromTo(
		'.angle__image-first',
		{
			top: 0,
		},
		{
			top: '-250%',
			duration: 24,
		},
		'+=10'
	)
	tl.fromTo(
		'.angle__image-second',
		{
			top: '250%',
		},
		{
			top: 0,
			duration: 40,
		},
		'<'
	)
	tl.to(
		'.angle__image-second',
		{
			top: '-250%',
			duration: 40,
		},
		'>'
	)
	// tl.to(".section__cup", {
	//   top: 0,
	//   duration: 40,
	// }, "<");
	tl.fromTo(
		'.angle__image-third',
		{
			top: '250%',
		},
		{
			top: 0,
			duration: 40,
		},
		'<'
	)
	tl.to(
		'.section__angle-text',
		{
			x: '-100vw',
			duration: 60,
		},
		'>'
	)
	tl.to(
		'.section__angle-block__images',
		{
			x: '100vw',
			duration: 60,
		},
		'<'
	)

	gsap.set(images, {
		opacity: 0,
	})
	// gsap.set('section__angle-cup__finally', {
	// 	display: 'none',
	// })
	gsap.set(images[0], {
		opacity: 1,
		scale: 0,
		y: '-50%',
	})
	tl.to(
		images[0],
		{
			scale: 1,
			y: '-50%',
			duration: 60,
		},
		'<'
	)
	tl.to(
		objSequenceImage,
		{
			activeIndexImg: 57,
			ease: 'steps(57)',
			duration: 80,
			// repeat: -1,
			onUpdate: () => {
				gsap.set(images, {
					opacity: 0,
				})
				gsap.set(images[objSequenceImage.activeIndexImg], {
					opacity: 1,
				})
			},
		},
		'>'
	)
	tl.to(
		'.section__angle-cup',
		{
			scale: 0,
			// y: '-50%',
			duration: 40,
		},
		'>'
	)
	tl.to(
		'.section__angle-cup',
		{
			opacity: 0,
		},
		'<+=30'
	)
	tl.to(
		'.section__angle-cup__finally',
		{
			display: 'block',
			// y: '-50%',
		},
		'<'
	)
	tl.to(
		'.section__angle-cup__finally-wrapper',
		{
			css: {
				'grid-template-columns': '120px 1fr',
			},
			// y: '-50%',
			duration: 25,
		},
		'>'
	)
	// tl.to(
	// 	images[0],
	// 	{
	// 		scale: 1,
	// 		y: '-50%',
	// 		duration: 60,
	// 	},
	// 	'<'
	// )
	// tl.to(
	// 	'.section__angle-cup__wrapper',
	// 	{
	// 		// scale: 1,
	// 		width: '100px',
	// 		// y: '-50%',
	// 		duration: 40,
	// 	},
	// 	'>'
	// )
	// tl.to(
	// 	images,
	// 	{
	// 		// scale: 1,
	// 		width: '100px',
	// 		// y: '-50%',
	// 		duration: 40,
	// 	},
	// 	'<'
	// )
	// tl.to(".section__angle", {
	//   top: "-100%",
	//   duration: 40,
	// }, "+=1.5");
	// tl.to(".section__angle", {
	//   opacity: 0.5,
	//   duration: 40,
	// }, "+=1.5");
	// tl.to(".section__cup", {
	//   zIndex: 3,
	//   opacity: 1,
	//   // top: 0,
	//   duration: 24,
	// }, "<");

	return tlAngle
}
