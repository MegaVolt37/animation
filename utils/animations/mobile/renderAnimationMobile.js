export function animateRenderMobile(gsap, tl) {
	const tlRender = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__render',
			start: 'top top',
			scrub: 1,
		},
	})
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
	tlRender.fromTo(
		'.section__finally-img',
		{
			x: '150%',
		},
		{
			x: '-76%',
			duration: 40,
		},
		'>+=20'
	)
	return tlRender
}
