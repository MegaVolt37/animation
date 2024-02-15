export function animateFinallyMobile(gsap, tl) {
	const tlFinally = gsap?.timeline({
		scrollTrigger: {
			trigger: '.section__finally',
			start: 'top top',
			scrub: 1,
			end: '+=3000',
			// pinSpacing: true,
			pin: true,
		},
	})

	// tlFinally.to(
	// 	'.section__finally__block-img',
	// 	{
	// 		position: 'relative',
	// 		'z-index': 2,
	// 	},
	// 	'>'
	// )
	tl.fromTo(
		'.section__finally-img',
		{
			x: '150%',
		},
		{
			x: '-76%',
			duration: 40,
			scrollTrigger: {
				trigger: '.section__render',
				start: 'bottom+=100 bottom',
				scrub: 1,
				// pinSpacing: true,
			},
		},
		''
	)
	tlFinally.fromTo(
		'.section__finally-img',
		{
			x: '-76%',
		},
		{
			scale: 1.9,
			x: '-95%',
			y: '75%',
			duration: 24,
		},
		'>+=5'
	)

	tlFinally.to(
		'.section__finally-text',
		{
			y: '-100vh',
			duration: 12,
		},
		'<'
	)
	tlFinally.to(
		'.text__first',
		{
			y: '-100vh',
			opacity: 0,
		},
		'>'
	)
	tlFinally.to(
		'.text__second',
		{
			y: '0%',
			top: '0%',
			opacity: 1,
		},
		'<'
	)
	tlFinally.to(
		'.section__finally-text',
		{
			'margin-top': '-100%',
			y: '0%',
			duration: 12,
		},
		'<'
	)
	return tlFinally
}
