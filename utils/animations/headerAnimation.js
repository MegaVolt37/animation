export function animateHeader(gsap, tl) {
	const titleHeader = document.querySelector('.section__header-title')
	const bottleHeader = document.querySelector('.section__header-img')
	function changeTitle() {
		titleHeader.style.backgroundPosition = `100% ${100}%`
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
	tl.set('.section__header-title__wrapper', {
		y: '-50%',
	})
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
			x: '-100%',
			right: '100vw',
			y: '-50%',
		},
		{
			right: '-10%',
			x: '-10%',
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
			// x: '6%',
			// y: '-13%',
			x: '6%',
			y: '-65%',
			duration: 24,
		},
		'+=2.5'
	)
	tl.to(
		'.section__header-title__wrapper',
		{
			y: '-65%',
			// y: '-13%',
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
			y: '0%',
			duration: 24,
		},
		'<'
	)
	tl.to(
		'.section__header-image',
		{
			y: '-50%',
			duration: 24,
		},
		'>'
	)
	tl.fromTo(
		'.section__header-img',
		{ scale: '1' },
		{
			scale: '5',
			duration: 24,
			y: '0%',
		},
		'<'
	)

	tl.to(
		'.section__header-subtitle',
		{
			opacity: 0,
			y: '0%',
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
