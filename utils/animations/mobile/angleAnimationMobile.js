export function animateAngleMobile(gsap, tl) {
	const images = gsap.utils.toArray('.section__angle-cup__image')
	const objSequenceImage = {
		activeIndexImg: 0,
	}
	const tlAngle = gsap.timeline({
		scrollTrigger: {
			trigger: '.section__angle',
			start: 'top top',
			end: '+=7000',
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
		'.angle__image-first',
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
		'.angle__image-second',
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
		'.angle__image-second',
		{
			left: '-300vw',
			duration: 35,
		},
		'>'
	)
	tlAngle.fromTo(
		'.angle__image-third',
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
		'.angle__image-third',
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		'.angle__image-fourth',
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
		'.angle__image-fourth',
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		'.angle__image-firth',
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
		'.angle__image-firth',
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		'.angle__image-sixth',
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
		'.angle__image-sixth',
		{
			left: '-300vw',
			duration: 40,
		},
		'>'
	)
	tlAngle.fromTo(
		'.angle__image-seventh',
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

	gsap.set(images, {
		opacity: 0,
	})
	gsap.set(images[0], {
		opacity: 1,
		scale: 0,
	})
	tlAngle.to(
		images[0],
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
				gsap.set(images, {
					opacity: 0,
				})
				gsap.set(images[objSequenceImage.activeIndexImg], {
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
