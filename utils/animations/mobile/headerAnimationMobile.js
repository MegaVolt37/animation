export function animateHeaderMobile(gsap, tl) {
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
			titleHeader.style.backgroundPosition = `center -${100}%`
		} else {
			titleHeader.style.backgroundPosition = `center -${
				100 - overlapPercentage
			}%`
		}
	}
	gsap.set('.section__header-title__wrapper', {
		y: '-50%',
	})
	const tlHeaderMobile = gsap?.timeline({
		scrollTrigger: {
			trigger: '.content',
			start: 'top-=1px top',
			scrub: 1,
			pin: '.section__header-wrapper',
		},
	})
	tlHeaderMobile.fromTo(
		'.section__header-image',
		{
			top: '100vh',
		},
		{
			top: '-5vh',
			duration: 40,
			onUpdate: (self) => {
				changeTitle()
			},
		},
		'<'
	)
	tlHeaderMobile.fromTo(
		'.section__header-subtitle',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 24,
		},
		'>-=15'
	)
	tlHeaderMobile.fromTo(
		'.section__header-img',
		{ scale: '1' },
		{
			scale: '2.5',
			duration: 24,
			y: '0%',
		},
		'>'
	)
	tlHeaderMobile.to(
		'.section__header-subtitle',
		{
			opacity: 0,
			y: '0%',
			duration: 5,
		},
		'<'
	)
	tlHeaderMobile.fromTo(
		'.section__header-title',
		{ opacity: 1 },
		{
			opacity: 0,
			duration: 5,
		},
		'<'
	)
	// tl.to('.section__header-wrapper', {
	// 	// top: '-100%',
	// 	top: '-100%',
	// 	duration: 40,
	// })
	// tl.to('.section__drawing', { y: '0%', duration: 40 }, '<')

	return tlHeaderMobile
}
