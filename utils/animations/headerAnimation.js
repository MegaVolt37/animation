export function animateHeader(gsap, tl) {
	const titleHeader = document.querySelector('.section__header-title')
	const bottleHeader = document.querySelector('.section__header-img')
	function changeTitle() {
		titleHeader.style.backgroundPosition = `${100}%`
		if (window.scrollY === 0) return
		const titleSize = titleHeader.getBoundingClientRect()
		const bottleSize = bottleHeader.getBoundingClientRect()
		const overlapLeft = Math.max(titleSize.left, bottleSize.left)
		const overlapTop = Math.max(titleSize.top, bottleSize.top)
		const overlapRight = Math.min(titleSize.right, bottleSize.right)
		const overlapBottom = Math.min(titleSize.bottom, bottleSize.bottom)

		const overlapWidth = overlapRight - overlapLeft
		const overlapHeight = overlapBottom - overlapTop

		const overlapArea = overlapWidth * overlapHeight
		const smallerArea = Math.min(
			titleSize.width * titleSize.height,
			bottleSize.width * bottleSize.height
		)
		const overlapPercentage = (overlapArea / smallerArea) * 100
		if (overlapPercentage < 0) {
			titleHeader.style.backgroundPosition = `${100}%`
		} else {
			titleHeader.style.backgroundPosition = `${100 - overlapPercentage}%`
		}
	}
	// tl.set('.section__header-subtitle',{
	// 	opacity: 0,
	// 	yPercent: 100,
	// })
	const tlHeader = gsap?.timeline({
		scrollTrigger: {
			trigger: '.section__header-wrapper',
			start: 'top top',
			// end: "+=3000",
			scrub: 2,
			// pin: true,
		},
	})
	
	tl.fromTo(
		'.section__header-image',
		{
			xPercent: -100,
			right: '100vw'
		},
		{
			right: '-10%',
			xPercent: -10,
			duration: 40,
			onUpdate: (self) => {
				changeTitle()
			},
		},
		'<'
	)
	tl.to(
		'.section__header-image',
		{
			x: '6%',
			y: '-13%',
			// xPercent: 6,
			// yPercent: -13,
			duration: 24,
		},
		'+=2.5'
	)
	tl.to(
		'.section__header-title__wrapper',
		{
			// yPercent: -13,
			y: '-13%',
			duration: 24,
		},
		'<'
	)
	tl.to(
		'.section__header-title',
		{
			scrollTrigger: {
				trigger: '.section__header',
				toggleActions: 'play none none reverse',
			},
			// top: "38%",
			// yPercent: -85,
			// duration: 24,
		},
		'<'
	)
	tl.fromTo(
		'.section__header-subtitle',
		{
			opacity: 0,
			// yPercent: 100,
			y: '100%',
		},
		{
			opacity: 1,
			yPercent: 0,
			duration: 24,
		},
		'<'
	)
	tl.fromTo(
		'.section__header-img',
		{ scale: '1' },
		{
			scale: '2.5',
			duration: 24,
			yPercent: 0,
		},
		'>'
	)
	tl.to(
		'.section__header-image',
		{
			y: '0%',
			duration: 24,
		},
		'<'
	)
	tl.to(
		'.section__header-subtitle',
		{
			opacity: 0,
			yPercent: 0,
			duration: 5,
		},
		'<'
	)
	tl.fromTo(
		'.section__header-title',
		{ opacity: 1 },
		{
			opacity: 0,
			duration: 7,
		},
		'<'
	)
	tl.to(
		'.section__header-title',
		{
			duration: 24,
			scale: '2.5',
		},
		'<'
	)
	tl.to('.section__header-wrapper', {
		top: '-100%',
		duration: 1,
	})
	tl.to('.section__drawing', { top: '0%', duration: 1 }, '<')

	return tlHeader
}
