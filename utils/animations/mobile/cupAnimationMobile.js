export function animateCupMobile(gsap, tl) {
	const tlAngle = gsap.timeline({
		// scrollTrigger: {
		// 	trigger: '.section__angle',
		// 	start: 'top top',
		// 	end: '+=3000',
		// 	scrub: 5,
		// 	// pinSpacing: true,
		// 	// pin: true,
		// 	toggleActions: 'play none none reverse',
		// },
	})
	// tlAngle.fromTo(
	// 	'.section__angle-cup__finally-wrapper',
	// 	{
	// 		css: {
	// 			'grid-template-columns': '0px 1fr',
	// 		},
	// 		scrollTrigger: {
	// 			trigger: '.section__angle-cup__finally',
	// 			start: 'top top',
	// 			scrub: 1,
	// 			// pinSpacing: true,
	// 			// pin: true,
	// 			toggleActions: 'play none none reverse',
	// 		},
	// 	},
	// 	{
	// 		css: {
	// 			'grid-template-columns': '110px 1fr',
	// 		},
	// 		duration: 25,
	// 		// ease: 'linear',
	// 	},
	// 	'>'
	// )
	// tlAngle.fromTo(
	// 	'.dot-wrapper',
	// 	{ zIndex: 1 },
	// 	{
	// 		zIndex: 0,
	// 	},
	// 	'<+=16'
	// )

	return tlAngle
}
