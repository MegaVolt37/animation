export function animateFinallyMobile(gsap) {
	const tlFinally = gsap?.timeline({
		scrollTrigger: {
			trigger: '.section__finally-wrapper',
			start: 'top top',
			scrub: 1,
			// end: '+=3000',
			pinSpacing: true,
			pin: true,
		},
	})

	tlFinally.to(
		'.section__finally__block-img',
		{
			position: 'relative',
			'z-index': 2,
		},
		'>'
	)
	tlFinally.to(
		'.section__finally-img',
		{
			scale: 1.9,
			x: '-95%',
			y: '75%',
			duration: 24,
		},
		'>'
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
