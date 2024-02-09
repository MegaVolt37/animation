export function animateRenderMobile(gsap, tl) {
	const tlRender = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__render',
			start: 'top top',
			// end: "+=3000",
			scrub: 1,
			markers: true,
		},
	})
	// tl.fromTo(
	// 	'.section__render-text',
	// 	{ opacity: 0, xPercent: -200 },
	// 	{
	// 		xPercent: 0,
	// 		opacity: 1,
	// 		duration: 24,
	// 	},
	// 	'<-=24'
	// )
	// tl.fromTo(
	// 	'.section__render-text',
	// 	{
	// 		xPercent: 0,
	// 	},
	// 	{
	// 		xPercent: -200,
	// 		duration: 24,
	// 	},
	// 	'+=3.5'
	// )
	// tl.fromTo(
	// 	'.section__render-img',
	// 	{
	// 		yPercent: 0,
	// 	},
	// 	{
	// 		yPercent: -200,
	// 		duration: 24,
	// 	},
	// 	'<'
	// )
	tlRender.to(
		'.section__render',
		{
			top: '0%',
			y: '0%',
			duration: 0,
		},
		'>'
	)
	tlRender.to(
		'.section__finally',
		{
			top: '0%',
			y: '0%',
			duration: 0,
		},
		'<'
	)
	// tlRender.fromTo(
	// 	'.section__finally-img',
	// 	{
	// 		x: '150%',
	// 	},
	// 	{
	// 		x: '-75%',
	// 		duration: 80,
	// 		scrollTrigger: {
	// 			trigger: '.section__render',
	// 			start: 'top top',
	// 			// end: "+=3000",
	// 			scrub: 1,
	// 			markers: true,
	// 		},
	// 	}
	// )

	return tlRender
}
