<template>
  <nav class="right-color navbar navbar-expand-md mb-4">
    <div class="container">
      <a
        style="cursor: pointer"
        class="text-dark navbar-brand"
        @click="$router.push({ name: 'Main' })"
        >Буддизм</a
      >
    </div>
  </nav>
</template>

<style scoped>
.right-color {
  background-color: #40c4e7;
}
</style>

<script>
export default {
  name: "NavBar",
};
</script>
