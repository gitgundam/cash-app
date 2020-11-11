<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"></use>
  </svg>

</template>

<script lang="ts">

try {
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (err) {
  console.log(err);
}
  export default {
    name: "Icon",
    props:['name']
}
</script>

<style scoped lang="scss">
.icon {
  fill: currentColor;
  overflow: hidden;
}
</style>