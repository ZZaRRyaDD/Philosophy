<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    :class="{
      'fs-6 lh-sm': this.width < 768,
    }"
  >
    <h5
      :class="{
        'fs-6 lh-sm': this.width < 768,
        'fs-5': this.width >= 768,
      }"
    >
      Привет, друг!
    </h5>
    <p class="text-center">
      Данный тест поможет тебе понять уровень схожести с идеями Буддизма.
    </p>
    <button type="button" class="btn btn-success mb-3">
      <a
        class="text-light text-decoration-none"
        @click="$router.push({ name: 'Question' })"
        >Приступить к тестированию</a
      >
    </button>
    <button @click="$router.push({ name: 'About' })" class="btn btn-primary">
      Информация о проекте
    </button>
  </div>
</template>

<script>
export default {
  name: "MainView",
};
</script>
