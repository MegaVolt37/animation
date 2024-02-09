export function animateFinallyMobile(gsap) {
	const tlFinally = gsap?.timeline({
		scrollTrigger: {
			trigger: '.section__finally',
			start: 'top+=80% top',
			scrub: 1,
			markers: true,
			// end: '+=3000',
			pin: '.section__finally-wrapper',
			// pin: true,
		},
	})
	tlFinally.fromTo(
		'.section__finally-img',
		{
			x: '150%',
		},
		{
			x: '-75%',
			duration: 80,
		},
		'>'
	)
	tlFinally.fromTo(
		'.section__finally-text',
		{
			x: '100%',
		},
		{
			x: '0%',
			duration: 24,
		},
		'>-=20'
	)
	// tlFinally.to(
	// 	'.section__finally-text',
	// 	{
	// 		order: 0,
	// 		css: {
	// 			order: 0,
	// 		},
	// 		duration: 10,
	// 	},
	// 	'>'
	// )
	// tlFinally.to(
	// 	'.section__finally-img',
	// 	{
	// 		y: '100%',
	// 		duration: 10,
	// 	},
	// 	'>'
	// )
	// tlFinally.to(
	// 	'.section__finally-text',
	// 	{
	// 		y: '-57vh',
	// 		duration: 10,
	// 	},
	// 	'>'
	// )
	// tlRender.to(
	// 	'.section__finally-img',
	// 	{
	// 		scale: 1.9,
	// 		xPercent: -39,
	// 		yPercent: 21,
	// 		duration: 24,
	// 	},
	// 	'+=2'
	// )
	// tlRender.to(
	// 	'.text__first',
	// 	{
	// 		yPercent: -200,
	// 		opacity: 0,
	// 		duration: 24,
	// 	},
	// 	'<'
	// )
	// tlRender.to(
	// 	'.text__second',
	// 	{
	// 		y: 0,
	// 		top: 0,
	// 		opacity: 1,
	// 		duration: 24,
	// 	},
	// 	'<'
	// )
	// tlRender.to(
	// 	'.section__finally',
	// 	{
	// 		paddingBottom: '30%',
	// 		duration: 12,
	// 	},
	// 	'>'
	// )
	// tlRender.to(
	// 	'.section__finally-img',
	// 	{
	// 		yPercent: -15,
	// 		duration: 12,
	// 	},
	// 	'<'
	// )

	// tl.fromTo(
	// 	'.section__finally',
	// 	{
	// 		y: 0,
	// 	},
	// 	{
	// 		top: '-100%',
	// 		duration: 40,
	// 		onUpdate: () => {
	// 			document.body.style = 'background-color: #f7f7f9;'
	// 		},
	// 	},
	// 	'>'
	// )
	// tl.to(
	// 	'.section__angle',
	// 	{
	// 		top: 0,
	// 		duration: 40,
	// 	},
	// 	'<'
	// )

	return tlFinally
}
