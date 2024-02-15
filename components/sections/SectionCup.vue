<template>
  <section class="section__cup bg__white section">
    <img
      class="section__cup-image"
      v-for="image in arr"
      :key="image"
      :src="'images/cup3/' + image"
      loading="lazy"
      alt="Image"
      width="470"
    />
  </section>
</template>

<script setup>
const arr = [
  "!Render_00000.png",
  "!Render_00001.png",
  "!Render_00002.png",
  "!Render_00003.png",
  "!Render_00004.png",
  "!Render_00005.png",
  "!Render_00006.png",
  "!Render_00007.png",
  "!Render_00008.png",
  "!Render_00009.png",
  "!Render_00010.png",
  "!Render_00011.png",
  "!Render_00012.png",
  "!Render_00013.png",
  "!Render_00014.png",
  "!Render_00015.png",
  "!Render_00016.png",
  "!Render_00017.png",
  "!Render_00018.png",
  "!Render_00019.png",
  "!Render_00020.png",
  "!Render_00021.png",
  "!Render_00022.png",
  "!Render_00023.png",
  "!Render_00024.png",
  "!Render_00025.png",
  "!Render_00026.png",
  "!Render_00027.png",
  "!Render_00028.png",
  "!Render_00029.png",
  "!Render_00030.png",
  "!Render_00031.png",
  "!Render_00032.png",
  "!Render_00033.png",
  "!Render_00034.png",
  "!Render_00035.png",
  "!Render_00036.png",
  "!Render_00037.png",
  "!Render_00038.png",
  "!Render_00039.png",
  "!Render_00040.png",
  "!Render_00041.png",
  "!Render_00042.png",
  "!Render_00043.png",
  "!Render_00044.png",
  "!Render_00045.png",
  "!Render_00046.png",
  "!Render_00047.png",
  "!Render_00048.png",
  "!Render_00049.png",
  "!Render_00050.png",
  "!Render_00051.png",
  "!Render_00052.png",
  "!Render_00053.png",
  "!Render_00054.png",
  "!Render_00055.png",
  "!Render_00056.png",
  "!Render_00057.png",
];
</script>

<style lang="scss" scoped>
.section__cup {
  z-index: -1;
  opacity: 0;
  &-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 35vw;
  }
}
</style>
