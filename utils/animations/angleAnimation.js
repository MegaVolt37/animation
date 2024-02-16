export function animateAngle(gsap, tl) {
	const imagesCup = gsap.utils.toArray('.section__angle-cup__image')
	const imagesAngle = gsap.utils.toArray('.section__angle-img')
	const objSequenceImage = {
		activeIndexImg: 0,
	}
	const tlAngle = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__angle',
			start: 'top top',
			scrub: 2,
		},
	})
	tl.fromTo(
		imagesAngle[0],
		{
			top: 0,
		},
		{
			top: '-300vh',
			duration: 24,
		},
		'+=10'
	)
	tl.fromTo(
		imagesAngle[1],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 35,
		},
		'<-=10'
	)
	tl.to(
		imagesAngle[1],
		{
			top: '-300vh',
			duration: 35,
		},
		'>'
	)
	tl.fromTo(
		imagesAngle[2],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 40,
		},
		'<-=10'
	)
	tl.to(
		imagesAngle[2],
		{
			top: '-300vh',
			duration: 40,
		},
		'>'
	)
	tl.fromTo(
		imagesAngle[3],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 40,
		},
		'<-=10'
	)
	tl.to(
		imagesAngle[3],
		{
			top: '-300vh',
			duration: 40,
		},
		'>'
	)
	tl.fromTo(
		imagesAngle[4],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 40,
		},
		'<-=10'
	)
	tl.to(
		imagesAngle[4],
		{
			top: '-300vh',
			duration: 40,
		},
		'>'
	)
	tl.fromTo(
		imagesAngle[5],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 40,
		},
		'<-=10'
	)
	tl.to(
		imagesAngle[5],
		{
			top: '-300vh',
			duration: 40,
		},
		'>'
	)
	tl.fromTo(
		imagesAngle[6],
		{
			top: '300vh',
		},
		{
			top: 0,
			duration: 40,
		},
		'<-=10'
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

	gsap.set(imagesCup, {
		opacity: 0,
	})
	gsap.set(imagesCup[0], {
		opacity: 1,
		scale: 0,
	})
	tl.to(
		imagesCup[0],
		{
			scale: 1,
			duration: 60,
		},
		'<'
	)
	tl.to(
		objSequenceImage,
		{
			activeIndexImg: 57,
			ease: 'steps(57)',
			duration: 120,
			onUpdate: () => {
				gsap.set(imagesCup, {
					opacity: 0,
				})
				gsap.set(imagesCup[objSequenceImage.activeIndexImg], {
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
		},
		'<'
	)
	tl.to(
		'.section__angle-cup__finally-wrapper',
		{
			css: {
				'grid-template-columns': '110px 1fr',
			},
			duration: 25,
		},
		'>'
	)
	tl.fromTo(
		'.dot-wrapper',
		{ zIndex: 1 },
		{
			zIndex: 0,
		},
		'<+=16'
	)

	return tlAngle
}
