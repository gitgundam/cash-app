<template>
  <svg>
    <use xlink:href="#labels"></use>
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
    name: "Icon"
}
</script>

<style scoped lang="scss">

</style>