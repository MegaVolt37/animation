<template>
	<section class="section__drawing bg__black section">
		<div
			ref="drawingImages"
			class="section__drawing-images"
			:class="{ is_hover: readHoverDrawing }"
		>
			<!-- <NuxtIcon
				class="section__drawing-images__container"
				name="bottle__drawing__bottle"
			/>
			<NuxtIcon
				class="section__drawing-images__container"
				name="bottle__drawing__bg"
			/> -->
			<DrawingBottleIcon />
			<!-- <div class="section__drawing-images__container">
				<img
					class="section__drawing-img"
					src="@/assets/images/bottle__drawing-white.png"
					alt="bottle"
				/>
				<img
					class="section__drawing-img__color"
					src="@/assets/images/bottle__drawing-color.png"
					alt="bottle"
				/>
			</div>
			<img
        class="section__drawing-img"
        src="@/assets/images/bottle__drawing.svg"
        alt="bottle"
      />
      <img
        class="section__drawing-img__color"
        src="@/assets/images/bottle__drawing-color.svg"
        alt="bottle"
      /> -->
		</div>

		<div class="section__drawing-text">
			<h1 class="section__title section__drawing-title text__white">Чертёж</h1>
			<p class="section__subtitle section__drawing-subtitle text__gray">
				был предоставлен клиентом, он&nbsp;позволил спроектировать
				и&nbsp;смоделировать объект с&nbsp;учётом всех размеров, форм
				и&nbsp;других характеристик.
			</p>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss">
.section__drawing {
	display: flex;
	align-items: center;
	gap: vw(70);
	&-images {
		position: relative;
		height: 100%;
		max-height: 100vh;
		width: 50%;
	}
	&-images__container {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
	}
	&-img {
		width: 100%;
		object-fit: cover;
	}
	&-img__color {
		width: 100%;
		object-fit: cover;
		display: none;
	}
	&-images__container:hover .section__drawing-img__color {
		display: block;
	}
	&-images__container:hover .section__drawing-img {
		display: none;
	}
	&-title {
		margin-bottom: vw(60);
	}
	&-subtitle {
		max-width: vw(295);
	}
}
</style>
