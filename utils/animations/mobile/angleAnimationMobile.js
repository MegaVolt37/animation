export function animateAngleMobile(gsap, tl) {
	const imagesCup = gsap.utils.toArray('.section__angle-cup__image')
	const imagesAngle = gsap.utils.toArray('.section__angle-img')
	const objSequenceImage = {
		activeIndexImg: 0,
	}
	const tlAngle = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__angle',
			start: 'top top',
			end: '+=10000',
			scrub: 1,
			pinSpacing: true,
			pin: true,
		},
	})
	tlAngle.fromTo(
		'.section__angle-content',
		{
			top: '100%',
		},
		{
			top: '0',
			duration: 40,
		},
		'<'
	)
	tlAngle.fromTo(
		imagesAngle[0],
		{
			left: 0,
		},
		{
			left: '-300vw',
			duration: 24,
		},
		'+=10'
	)
	tlAngle.fromTo(
		imagesAngle[1],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 35,
		},
		'<-=10'
	)
	tlAngle.to(
		imagesAngle[1],
		{
			left: '-300vw',
			duration: 35,
		},
		'>'
	)
	tlAngle.fromTo(
		imagesAngle[2],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 40,
		},
		'<-=10'
	)
	tlAngle.to(
		imagesAngle[2],
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		imagesAngle[3],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 40,
		},
		'<-=10'
	)
	tlAngle.to(
		imagesAngle[3],
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		imagesAngle[4],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 40,
		},
		'<-=10'
	)
	tlAngle.to(
		imagesAngle[4],
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		imagesAngle[5],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 40,
		},
		'<-=10'
	)
	tlAngle.to(
		imagesAngle[5],
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		imagesAngle[6],
		{
			left: '300vw',
		},
		{
			left: 0,
			duration: 40,
		},
		'<-=10'
	)
	tlAngle.to(
		'.section__angle-text',
		{
			x: '-100vw',
			duration: 60,
		},
		'>'
	)
	tlAngle.to(
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
	tlAngle.to(
		imagesCup[0],
		{
			scale: 1,
			duration: 60,
		},
		'<+=20'
	)
	tlAngle.to(
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
	tlAngle.to(
		'.section__angle-cup',
		{
			scale: 0,
			duration: 40,
		},
		'>'
	)
	tlAngle.to(
		'.section__angle-cup',
		{
			opacity: 0,
		},
		'<+=30'
	)
	tlAngle.to(
		'.section__angle-cup__finally',
		{
			display: 'block',
		},
		'<'
	)
	tlAngle.to(
		'.section__angle-cup__finally-wrapper',
		{
			css: {
				'grid-template-columns': '110px 1fr',
			},
			duration: 25,
		},
		'>'
	)
	tlAngle.fromTo(
		'.dot-wrapper',
		{ zIndex: 1 },
		{
			zIndex: 0,
		},
		'<+=16'
	)

	return tlAngle
}
