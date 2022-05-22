<template>
  <div>
    <button
      :data-value="weight"
      class="w-100 btn btn-outline-info my-2 btn-sm text-center text-dark"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AnswerComponent",
  props: {
    weight: Boolean,
    answer: String,
  },
};
</script>
